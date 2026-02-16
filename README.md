# Tapir Group — Nuxt 4 Test Task

Тестовое задание на позицию Frontend-разработчика (Senior).

Стек: `Nuxt 4`, `TypeScript`, `SSR`, `SCSS`, `BEM`, адаптивная верстка на `grid/flex`.

## 1. Требования к окружению

- `Node.js` 20+ (рекомендуется LTS)
- `npm` 10+

## 2. Установка

```bash
npm i
```

## 3. Запуск

```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

## 4. Production-сборка

```bash
npm run build
npm run preview
```

## 5. Дополнительные проверки

Проверка типизации:

```bash
npx nuxi typecheck
```

## 6. API

Эндпоинт товаров:

- `https://test-task-api.tapir.ws/products`

Примеры:

- `https://test-task-api.tapir.ws/products?page=1`
- `https://test-task-api.tapir.ws/products?page=2&limit=10`

## 7. Реализованный функционал

### Header

- Все ссылки-заглушки: `href="#"`.
- Бургер-кнопка есть визуально и не выполняет действий.
- Бургер отображается на мобильной версии.

### Главная

- Заголовок и кнопка `В каталог`.
- Кнопка ведет на `/catalog`.

### Каталог

- SSR-первая загрузка товаров на `/catalog` через `useAsyncData`.
- Карточка товара целиком — ссылка-заглушка `href="#"`.
- Кнопка избранного на карточке только визуальная.
- Цена `x2` считается как `ceil(price / 2)`.
- Кнопка `Показать еще`:
  - скрывается при клике;
  - показывается `Загрузка...`;
  - при успехе товары добавляются в конец списка;
  - при ошибке показывается блок ошибки и кнопка `Повторить`.

### Footer

- Все ссылки-заглушки: `href="#"`.

## 8. Техническое соответствие ТЗ

- SSR: выполнено.
- TypeScript: выполнено.
- SCSS: выполнено.
- БЭМ-нейминг классов: выполнено.
- Адаптивная верстка: выполнено.
- Преимущественное использование `grid/flex`: выполнено.

## 9. Структура проекта

```text
app/
  app.vue
  assets/scss/main.scss
  components/
    catalog/ProductCard.vue
    layout/TheHeader.vue
    layout/TheFooter.vue
  composables/useProductsApi.ts
  pages/
    index.vue
    catalog.vue
  types/product.ts
scripts/
  fix-vue-tsc-libs.cjs
nuxt.config.ts
tsconfig.json
```

## 10. Замечание по postinstall

В проекте есть скрипт `scripts/fix-vue-tsc-libs.cjs`, который запускается в `postinstall` и устраняет проблему `vue-tsc` в некоторых окружениях.

## 11. Публикация репозитория

Минимальная последовательность:

```bash
git init
git add .
git commit -m "feat: implement nuxt test task"
```

Далее создать публичный репозиторий на GitHub и отправить изменения:

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```