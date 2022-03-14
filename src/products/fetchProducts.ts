import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ProductsModels, ProductsModelsDTO} from './productsModels';

export const productsAPI = createApi({
  reducerPath: 'reportsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  endpoints: builder => ({
    products: builder.query<ProductsModels[], string>({
      query: url => url,
      transformResponse: (response: ProductsModelsDTO[]) => {
        return response.map(data => ({
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image,
          rating: {
            rate: data.rating.rate,
            count: data.rating.count,
          },
        }));
      },
    }),
  }),
});

export const {useProductsQuery} = productsAPI;
