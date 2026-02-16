import type { ProductsResponse } from '~/types/product'

const API_URL = 'https://test-task-api.tapir.ws/products'
const DEFAULT_LIMIT = 12

export const fetchProductsPage = (page: number, limit = DEFAULT_LIMIT) => {
  return $fetch<ProductsResponse>(API_URL, {
    query: {
      page,
      limit
    }
  })
}

export { DEFAULT_LIMIT }
