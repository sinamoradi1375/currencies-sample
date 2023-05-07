import useGetCoins from './queries/useGetCoins';

export default function Coins() {
  // Queries
  const { isLoading: isCoinsQueryLoading, isError: isCoinsQueryError, data: coinsQueryData } = useGetCoins();

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    coins
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    24h
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    7d
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    market cap
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    total volum
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    circulating supply
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coinsQueryData?.map((coin, i) => {
                  const is24hPercentagePositive = coin.price_change_percentage_24h > 0;

                  return (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={coin.image} alt={coin.id} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{coin.name}</div>
                            <div className="text-sm text-gray-500 uppercase">{coin.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{`$${coin.current_price}`}</div>
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap  ${
                          is24hPercentagePositive ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {/* TODO: add arrow */}
                        {` ${coin.price_change_percentage_24h}%`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
