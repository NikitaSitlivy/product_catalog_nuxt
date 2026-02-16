<template>
  <a class="product-card" href="#" :aria-label="`Открыть ${product.name}`">
    <div class="product-card__image-wrap">
      <img
        :class="['product-card__image', { 'product-card__image--visible': isImageLoaded }]"
        :src="product.image"
        :alt="product.name"
        loading="lazy"
        decoding="sync"
        width="290"
        height="180"
        @load="isImageLoaded = true"
      />
      <span class="product-card__favorite" aria-label="Добавить в избранное">♡</span>
    </div>

    <div class="product-card__content">
      <div class="product-card__prices">
        <span class="product-card__price">{{ formatPrice(product.price) }}</span>
        <span class="product-card__price-half">{{ formatPrice(halfPrice) }} × 2</span>
      </div>

      <h3 class="product-card__title">{{ product.name }}</h3>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const isImageLoaded = ref(false)
const halfPrice = computed(() => Math.ceil(props.product.price / 2))

const formatPrice = (value: number) => `${new Intl.NumberFormat('ru-RU').format(value)} ₽`
</script>