<template>
  <section class="catalog-page">
    <div class="container catalog-page__container">
      <h1 class="catalog-page__title">каталог</h1>

      <ul class="catalog-page__grid" aria-live="polite">
        <li v-for="product in products" :key="product.id" class="catalog-page__item">
          <ProductCard :product="product" />
        </li>
      </ul>

      <div class="catalog-page__actions">
        <button
          v-if="hasNextPage && !isLoadingMore"
          class="catalog-page__more"
          type="button"
          @click="loadMore"
        >
          Показать еще
        </button>

        <p v-if="isLoadingMore" class="catalog-page__loading">Загрузка...</p>
      </div>

      <div v-if="loadMoreError" class="catalog-page__error">
        <p class="catalog-page__error-text">Произошла ошибка, попробуйте позже</p>
        <button class="catalog-page__retry" type="button" @click="retryLoadMore">Повторить</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ProductCard from '~/components/catalog/ProductCard.vue'
import { DEFAULT_LIMIT, fetchProductsPage } from '~/composables/useProductsApi'
import type { Product } from '~/types/product'

const products = ref<Product[]>([])
const currentPage = ref(1)
const totalPages = ref(1)
const isLoadingMore = ref(false)
const loadMoreError = ref(false)

const { data, error } = await useAsyncData('catalog-initial-products', () => {
  return fetchProductsPage(1, DEFAULT_LIMIT)
})

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Не удалось загрузить каталог'
  })
}

if (data.value) {
  products.value = data.value.products
  currentPage.value = data.value.currentPage
  totalPages.value = data.value.totalPages
}

const hasNextPage = computed(() => currentPage.value < totalPages.value)

const loadMore = async () => {
  if (isLoadingMore.value || !hasNextPage.value) {
    return
  }

  isLoadingMore.value = true
  loadMoreError.value = false

  try {
    const nextPage = currentPage.value + 1
    const response = await fetchProductsPage(nextPage, DEFAULT_LIMIT)

    products.value = [...products.value, ...response.products]
    currentPage.value = response.currentPage
    totalPages.value = response.totalPages
  } catch {
    loadMoreError.value = true
  } finally {
    isLoadingMore.value = false
  }
}

const retryLoadMore = async () => {
  await loadMore()
}
</script>