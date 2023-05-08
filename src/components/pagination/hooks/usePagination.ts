import { useCallback, useState } from 'react';

export default function usePagination() {
  // States
  const [currentPage, setCurrentPage] = useState(1);

  // Callbacks
  const goToNextPage = useCallback(() => {
    setCurrentPage((currPage) => ++currPage);
  }, []);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((currPage) => (currPage > 1 ? --currPage : currPage));
  }, []);

  return { currentPage, goToNextPage, goToPrevPage };
}
