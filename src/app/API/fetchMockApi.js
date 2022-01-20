import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mockApi = createApi({
  reducerPath: 'mockaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61e6d1a9ce3a2d0017359496.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (id) => `contacts/${id}`,
    }),
    getContacts: builder.query({
      query: (id) => `contacts/${id}`,
    }),
  }),
})

export const { useGetContactsQuery } = mockApi
