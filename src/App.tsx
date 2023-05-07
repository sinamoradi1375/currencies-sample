import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Coins from './components/coins';

export default function App() {
  // Variables
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-200 my-20">Welcome To Currencies Sample</h1>
        </div>
        <Coins />
      </div>
    </QueryClientProvider>
  );
}
