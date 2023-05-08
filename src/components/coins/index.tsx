import Pagination from '../pagination';
import usePagination from '../pagination/hooks/usePagination';
import TableBodyRows from './components/TableBodyRows';
import useGetCoins from './queries/useGetCoins';

const TABLE_HEADERS = ['coins', 'price', '24h', '7d', 'market cap', 'total volume', 'circulating supply'];

export default function Coins() {
  // Customs
  const { currentPage, goToNextPage, goToPrevPage } = usePagination();

  // Queries
  const {
    isLoading: isCoinsQueryLoading,
    isError: isCoinsQueryError,
    data: coinsQueryData,
    isFetching: isCoinsQueryFetching,
  } = useGetCoins(currentPage);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {TABLE_HEADERS.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <TableBodyRows
                  tableColsCount={TABLE_HEADERS.length}
                  isLoading={isCoinsQueryLoading && isCoinsQueryFetching}
                  isError={isCoinsQueryError}
                  coins={coinsQueryData}
                />
              </tbody>
            </table>
          </div>
          <Pagination nextHandler={goToNextPage} prevHandler={goToPrevPage} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}
