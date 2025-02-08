import { Button } from './ui';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, setPage }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <Button
        className={currentPage > 1 && totalPages > 1 ? 'block' : 'invisible'}
        style="neutral"
        size="small"
        onClick={() => {
          if (currentPage > 1 && totalPages > 1) {
            setPage(currentPage - 1);
          }
        }}
      >
        Prev
      </Button>
      Page {currentPage} of {totalPages}
      <Button
        className={
          currentPage < totalPages && totalPages > 1 ? 'block' : 'invisible'
        }
        style="neutral"
        size="small"
        onClick={() => {
          if (currentPage < totalPages && totalPages > 1) {
            setPage(currentPage + 1);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
};
export default Pagination;
