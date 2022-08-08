import PageLink from './PageLink';
import './Pagination.css';

export type Props = {
  currentPage: number;
  lastPage: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  setCurrentPage,
}: Props) {
  const pageNums = [1, 2, 3];

  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink
        href="#"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          href="#"
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </PageLink>
      ))}
      <PageLink
        href="#"
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </PageLink>
    </nav>
  );
}
