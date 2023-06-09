import axios, { AxiosResponse } from 'axios';
import { CoinType } from '../@types/coin';

axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

const responseBody = <T>(response: AxiosResponse<T>) => response;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: unknown) => axios.post<T>(url, { data: body }).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
  put: <T>(url: string, body: unknown) => axios.put<T>(url, { data: body }).then(responseBody),
};

const Currency = {
  getCoins: (page: number) =>
    requests.get<CoinType[]>(`/coins/markets?vs_currency=usd&page=${page}&per_page=20&price_change_percentage=24h,7d`),
};

const agent = {
  Currency,
};

export default agent;
