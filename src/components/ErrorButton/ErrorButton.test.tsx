import React from 'react';

import { BUTTON, ERROR } from '@config';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ErrorButton from './ErrorButton';

vi.mock('@components/ui', () => ({
  Button: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => <button onClick={onClick}>{children}</button>,
}));

describe('ErrorButton', () => {
  it('Should render the button correctly', () => {
    render(<ErrorButton />);

    expect(screen.getByText(BUTTON.THROW_ERROR)).toBeInTheDocument();
  });

  it('Should throw an error when the button is clicked', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(<ErrorButton />);

    const button = screen.getByText(BUTTON.THROW_ERROR);

    expect(() => {
      fireEvent.click(button);
    }).toThrowError(new Error(ERROR.ERROR_BUTTON));

    consoleErrorSpy.mockRestore();
  });
});
