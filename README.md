# Svitlo Landing

EDDY Group — Резервне живлення для закладів освіти. Односторінковий лендинг на **Astro**.

*[English version below / англійська версія нижче](README.en.md)*

## Структура проєкту

```
src/
  layouts/
    Layout.astro         # HTML-каркас, <head>, meta/OG-теги, JSON-LD
  pages/
    index.astro           # Сторінка (збирає всі компоненти)
  components/
    Nav.astro            # Верхня навігація + мобільна шухляда
    Hero.astro           # Хіро-блок (заголовок, фото продукту, статистика)
    Kit.astro            # "01 — Що входить" сітка
    How.astro            # "02 — Як це працює" кроки процесу
    Plans.astro          # "03 — Оберіть рішення" картки
    Why.astro            # "04 — Повний цикл" секція
    Cta.astro            # Форма заявки (Web3Forms)
    Ticker.astro         # Рухома стрічка
    Footer.astro         # Підвал
    Scripts.astro        # Інлайн JS: бургер-меню, скрол навігації, відправка форми, анімація дротів у хіро
  data/
    site.ts               # УВЕСЬ редагований контент + SEO-поля тут
public/
  img/                  # Всі зображення/логотипи (копіюються як є)
  style.css             # Наявний CSS (без змін)
  robots.txt
  sitemap.xml
dist/                   # Результат білду (генерується, у .gitignore)
```

## Редагування контенту

Усе, що знадобиться копірайтеру — заголовки, тексти карток, підписи кнопок,
підписи форми, meta-опис, `og:image`, JSON-LD — лежить у
**[`src/data/site.ts`](src/data/site.ts)**. Редагуйте значення там,
розмітку `.astro`-файлів для зміни тексту чіпати не треба.

Винятки, які лишаються в розмітці:
- Зміни верстки/структури → відповідний компонент у `src/components/`
- Візуальні стилі → `public/style.css`
- Зображення → покласти файл у `public/img/` і послатись на нього як `/img/назва.ext` з `site.ts`

## Команди збірки

```bash
# Встановити залежності
npm install

# Dev-сервер з гарячим перезавантаженням
npm run dev        # http://localhost:4321

# Продакшн-білд → dist/
npm run build

# Перегляд готового білду локально (обслуговує dist/ як є)
npm run preview    # http://localhost:4321
```

Node.js потрібен **лише для розробки й збірки**. Результат у `dist/` —
звичайні статичні HTML/CSS/JS без жодної залежності від серверного
рантайму — будь-який статичний хостинг (PHP-хостинг, Apache/Nginx,
Netlify, Cloudflare Pages, cPanel тощо) обслужить його без Node.

## Локальний перегляд через Herd

Herd (Laravel Herd) очікує готовий `index.html` у корені сайту або в
`public/`, а він з'являється лише після білду. Не намагайтесь підв'язати
Herd-домен `*.test` до цього проєкту — використовуйте `npm run dev` або
`npm run build && npm run preview`, обидва обслуговують `http://localhost:4321`.

## SEO

- `meta description`, `theme-color`, canonical URL
- Open Graph теги (`og:title`, `og:description`, `og:image` + розміри, `og:locale`)
- Twitter Card теги
- JSON-LD: схеми `Organization` + `Service`

Усе перелічене вище генерується з `seo`, `organization` та `service` у
`src/data/site.ts` — редагувати там, а не в `Layout.astro`.

> `og:image` наразі перевикористовує фото продукту з хіро-блоку (1694×1694,
> не ідеальні 1200×630 для OG). Замініть `seo.ogImage` в `site.ts`, коли буде
> готове окреме зображення для шерингу.

## Форма заявки

Форма контактів надсилається через [Web3Forms](https://web3forms.com/).
Наразі стоїть плейсхолдер-ключ (`cta.form.accessKey` у `site.ts`) — форма
показуватиме "не підключено", поки не буде встановлено реальний ключ:

1. Отримати безкоштовний ключ на web3forms.com (вказати `office@eddygroup.eu`, ключ прийде на пошту)
2. Замінити значення `cta.form.accessKey` у `src/data/site.ts`
3. Перезібрати й задеплоїти

## Деплой

Заливання коду в git-репозиторій (Bitbucket, GitHub тощо) **само по собі
не публікує сайт** — це лише сховище коду. Щоб реально задеплоїти:

1. `npm run build` — отримати `dist/`
2. Залити вміст `dist/` на веб-сервер, що обслуговує `svitlo.eddygroup.eu`
   (FTP/SSH/cPanel — залежно від того, який доступ є до хостингу)

Наразі CI/автодеплой не налаштований. Якщо репозиторій на Bitbucket,
можна додати Pipeline, який робитиме `npm ci && npm run build` і сам
заливатиме `dist/` на сервер при кожному merge у `main` — скажіть, якщо
потрібно це налаштувати.
