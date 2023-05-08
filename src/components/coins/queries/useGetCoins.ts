import { useQuery } from '@tanstack/react-query';
import agent from '../../../utils/agent';

export default function useGetCoins(page: number) {
  const { isLoading, isError, data, isFetching } = useQuery({
    queryKey: ['paginated-coins', page],
    queryFn: async () => {
      const { data: axiosData } = await agent.Currency.getCoins(page);

      return axiosData;
    },
  });

  return { isLoading, isError, data, isFetching };
}
