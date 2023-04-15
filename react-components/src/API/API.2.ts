import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IChar from '../types/char';

type charsResponce = {
  info: {
    count: number;
  };
  results: IChar[];
};

export const charsAPI = createApi({
  reducerPath: 'charsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getChars: build.query<charsResponce, string | undefined>({
      query: (name = '') => `character${name && `?name=${name}`}`,
    }),
    getChar: build.query<IChar, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharsQuery, useGetCharQuery } = charsAPI;
