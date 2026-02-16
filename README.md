# Tapir.Group — Nuxt 4 Test Task

Тестовое задание: Nuxt 4 + TypeScript + SSR + SCSS + БЭМ.

## Запуск

```bash
npm i
npm run dev
```

## Что реализовано

- Главная страница `/` с кнопкой перехода в каталог.
- Каталог `/catalog` с SSR-первой загрузкой (через `useAsyncData`).
- Кнопка “Показать ещё” с состояниями:
  - загрузка (`Загрузка...`),
  - успешное добавление товаров,
  - ошибка (`Произошла ошибка, попробуйте позже`) + `Повторить`.
- Цена `x2` рассчитывается как `ceil(price / 2)`.
- Все ссылки в header/footer и карточках — заглушки `href="#"`.
- Кнопка избранного на карточке присутствует визуально и не выполняет действий.
- Адаптив на Grid/Flex и BEM-нейминг классов.

## API

- `https://test-task-api.tapir.ws/products`
- Примеры:
  - `https://test-task-api.tapir.ws/products?page=1`
  - `https://test-task-api.tapir.ws/products?page=2&limit=10`
