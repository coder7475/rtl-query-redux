import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pokeapi.co/api/v2/"
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name: string) => `pokemon/${name}`
        })
    }),
})

export const { useGetPokemonByNameQuery } = baseApi;

export default baseApi;