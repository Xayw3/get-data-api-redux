import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/' }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query<any, void>({
      query: () => 'currencies.json',
    }),
    getCurrencyRate: builder.query<any, void>({
      query: (name) => `currencies/${name}.json`,
    }),
    getCurrencyCalculator: builder.query<any, void>({
      query: (calc) => `currencies/${calc}.json`,
    }),
  }),
});

export const { useGetAllCurrenciesQuery, useGetCurrencyRateQuery, useGetCurrencyCalculatorQuery } = currencyApi;

export default currencyApi;
