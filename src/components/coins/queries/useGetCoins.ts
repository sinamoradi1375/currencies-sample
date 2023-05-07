import { useQuery } from '@tanstack/react-query';
import agent from '../../../utils/agent';

export default function useGetCoins() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['addresses'],
    queryFn: async () => {
      const { data: axiosData } = await agent.Currency.getCoins();

      return axiosData;
    },
  });

  return { isLoading, isError, data };
}
