import { CoinType } from '../../../@types/coin';

type Props = {
  tableColsCount: number;
  isLoading: boolean;
  isError: boolean;
  coins?: CoinType[];
};

export default function TableBodyRows({ tableColsCount, isLoading, isError, coins }: Props) {
  if (isError)
    return (
      <tr>
        <td colSpan={tableColsCount} className="px-4 py-2 ">
          <div className="bg-red-100 text-red-700 p-4 text-center" role="alert">
            <p className="font-bold">Error</p>
            <p>Something went wrong!</p>
          </div>
        </td>
      </tr>
    );

  if (isLoading)
    return (
      <tr className="animate-pulse">
        <td colSpan={tableColsCount} className="px-4 py-2 ">
          <div className="h-10 bg-gray-300 rounded"></div>
        </td>
      </tr>
    );

  return (
    <>
      {coins?.map((coin, i) => {
        const is24hPercentagePositive = coin.price_change_percentage_24h > 0;
        const is7dPercentagePositive = coin.price_change_percentage_7d_in_currency > 0;
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
              className={`px-6 py-4 whitespace-nowrap   ${is24hPercentagePositive ? 'text-green-600' : 'text-red-600'}`}
            >
              <div className="flex">
                <div className={is24hPercentagePositive ? '' : 'rotate-180'}>^</div>
                <div className="ml-1">{` ${coin.price_change_percentage_24h}%`}</div>
              </div>
            </td>
            <td
              className={`px-6 py-4 whitespace-nowrap   ${is7dPercentagePositive ? 'text-green-600' : 'text-red-600'}`}
            >
              <div className="flex">
                <div className={is7dPercentagePositive ? '' : 'rotate-180'}>^</div>
                <div className="ml-1">{` ${coin.price_change_percentage_7d_in_currency.toFixed(2)}%`}</div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{`$${coin.market_cap}`}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{`$${coin.total_volume}`}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex">
                <div className="text-sm font-medium text-gray-900">{coin.circulating_supply}</div>
                <div className="text-sm text-gray-500 uppercase ml-3">{coin.symbol}</div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
}
