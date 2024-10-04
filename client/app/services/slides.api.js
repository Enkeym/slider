// services/slides.api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const slidesApi = createApi({
  reducerPath: 'slidesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['Slides'],
  endpoints: (builder) => ({
    getSlides: builder.query({
      query: () => '/sliders',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Slides', id })),
              { type: 'Slides', id: 'LIST' }
            ]
          : [{ type: 'Slides', id: 'LIST' }]
    }),

    addSlide: builder.mutation({
      query: (newSlide) => ({
        url: '/sliders/add',
        method: 'POST',
        body: newSlide
      }),
      invalidatesTags: [{ type: 'Slides', id: 'LIST' }]
    }),

    deleteSlide: builder.mutation({
      query: (id) => ({
        url: `/sliders/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Slides', id: 'LIST' }]
    })
  })
})

export const {
  useGetSlidesQuery,
  useAddSlideMutation,
  useDeleteSlideMutation
} = slidesApi
