import { MemoryRouter } from 'react-router';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('Should disable Prev button when current page is 1', () => {
    render(
      <MemoryRouter>
        <Pagination currentPage={1} totalPages={5} setPage={() => {}} />
      </MemoryRouter>
    );

    const prevButton = screen.getByText('Prev');
    expect(prevButton).toHaveClass('invisible');
  });

  it('Should disable Next button when current page is equal to totalPages', () => {
    render(
      <MemoryRouter>
        <Pagination currentPage={5} totalPages={5} setPage={() => {}} />
      </MemoryRouter>
    );

    const nextButton = screen.getByText('Next');
    expect(nextButton).toHaveClass('invisible');
  });

  it('Should call update URL when Next button is clicked', () => {
    const setPage = vi.fn();

    render(
      <MemoryRouter>
        <Pagination currentPage={1} totalPages={5} setPage={setPage} />
      </MemoryRouter>
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(setPage).toHaveBeenCalledWith(2);
  });

  it('Should call update URL when Prev button is clicked', () => {
    const setPage = vi.fn();

    render(
      <MemoryRouter>
        <Pagination currentPage={3} totalPages={5} setPage={setPage} />
      </MemoryRouter>
    );

    const nextButton = screen.getByText('Prev');
    fireEvent.click(nextButton);

    expect(setPage).toHaveBeenCalledWith(2);
  });
});
