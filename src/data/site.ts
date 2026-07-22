// Весь текстовий контент і SEO-налаштування сайту зібрані тут.
// Щоб змінити текст на сторінці — редагуйте значення нижче, розмітку чіпати не треба.

// base-aware prefix for static assets in public/ — always absolute, so it works
// regardless of whether the current URL has a trailing slash (unlike bare relative paths)
const BASE = import.meta.env.BASE_URL;

export const seo = {
  title: 'Svitlo · EDDY Group — Резервне живлення для закладів освіти',
  description:
    'Резервне живлення «під ключ» для шкіл, ліцеїв і садків: гібридний інвертор, LiFePO₄ АКБ, монтаж та сервіс по Україні. Навчання — без перерв.',
  ogDescription:
    'Резервне живлення «під ключ» для шкіл, ліцеїв і садків: гібридний інвертор, LiFePO₄ АКБ, монтаж і сервіс по Україні.',
  canonical: 'https://svitlo.eddygroup.eu/',
  themeColor: '#121110',
  locale: 'uk_UA',
  siteName: 'EDDY Group',
  // TODO: замінити на окрему картинку 1200×630, коли буде готовий дизайн —
  // поки що перевикористовується фото інвертора з хіро-блоку.
  ogImage: {
    url: 'https://svitlo.eddygroup.eu/img/inverter-cut.png',
    width: 1694,
    height: 1694,
    type: 'image/png',
  },
};

export const organization = {
  name: 'EDDY Group',
  alternateName: 'EDDY Svitlo',
  url: 'https://svitlo.eddygroup.eu/',
  logo: 'https://svitlo.eddygroup.eu/img/eddy-ink.svg',
  image: 'https://svitlo.eddygroup.eu/img/inverter-cut.png',
  telephone: '+380932708204',
  email: 'office@eddygroup.eu',
  address: {
    streetAddress: 'вул. Глибочицька, 32',
    addressLocality: 'Київ',
    addressCountry: 'UA',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61576618363606',
    'https://www.youtube.com/@eddy-group',
  ],
};

export const service = {
  serviceType: 'Резервне живлення для закладів освіти',
  name: 'Резервне живлення «під ключ» для шкіл, ліцеїв і садків',
  description:
    'Гібридний інвертор, LiFePO₄ АКБ, монтаж, сервіс і віддалений моніторинг по Україні для безперебійної роботи закладів освіти під час відключень електроенергії.',
  areaServed: 'Україна',
  audienceType: 'Заклади освіти (школи, ліцеї, садки)',
};

export const nav = {
  links: [
    { label: 'Моделі', href: '#plans' },
    { label: 'Eddy Trade', href: 'http://trade.eddygroup.eu/', external: true },
    { label: '1-Vision', href: 'https://1vision.eddygroup.eu/', external: true },
    { label: 'Dr. STEM', href: 'https://drstem.eu/', external: true },
    { label: 'Новини', href: 'https://eddygroup.eu/news/', external: true },
    { label: 'Контакти', href: 'https://eddygroup.eu/contact/', external: true },
  ],
  cta: { label: 'Залишити заявку', href: '#contact' },
};

export const hero = {
  tag: '☀ Тепло і світло цілу зиму',
  titleHtml: 'Школа <span class="hl">працює</span><br>попри графік<br>відключень',
  lede: 'Комплексні рішення резервного живлення «під ключ» для шкіл, ліцеїв і садків. Просто, безпечно й готово до зими.',
  buttons: [
    { label: 'Залишити заявку', href: '#contact', variant: 'b1' },
    { label: 'Підібрати рішення', href: '#plans', variant: 'b2' },
  ],
  productImage: { src: `${BASE}img/inverter-cut.png`, alt: 'Гібридний трифазний інвертор', width: 1694, height: 1694 },
  plugLabels: { left: 'AC / GRID', right: 'PV + АКБ' },
  stats: [
    { value: '24 / 7', label: 'Система напоготові, вмикається миттєво' },
    { value: 'LiFePO₄', label: 'Безпечні акумулятори, довгий ресурс' },
    { value: 'Під ключ', label: 'Інвертор • АКБ • монтаж • сервіс' },
  ],
};

export const kit = {
  num: '01',
  titleHtml: 'Усе необхідне<br>в одному комплекті',
  cells: [
    { title: 'Гібридний інвертор', text: 'Автоперемикання мережа / АКБ / сонце.' },
    { title: 'LiFePO₄ батареї', text: 'Безпечні, з тривалим ресурсом роботи.' },
    { title: 'Захисна автоматика', text: 'Захист обладнання та електромережі.' },
    { title: 'Монтаж', text: 'Сертифіковані спеціалісти по Україні.' },
    { title: 'Пусконалагодження', text: 'Повне тестування перед запуском.' },
    { title: 'Навчання персоналу', text: 'Інструктаж з експлуатації системи.' },
  ],
};

export const how = {
  num: '02',
  titleHtml: 'Принцип роботи<br>резервного живлення',
  steps: [
    { code: '01 / IN', title: 'Електромережа', text: 'Живить заклад і заряджає акумулятори, коли світло є.' },
    { code: '02 / CORE', title: 'Гібридний інвертор', text: 'Керує потоками та миттєво перемикає джерела.' },
    { code: '03 / STORE', title: 'Акумуляторна система', text: 'LiFePO₄ АКБ тримають заряд для відключень.' },
    { code: '04 / LOAD', title: 'Споживачі', text: 'Використовують освітлення, техніка, мережа, безпека — без перерв.' },
  ],
  flowNote: 'Сонячні панелі (опція) — заряджають АКБ і живлять споживачів удень',
};

export const plans = {
  num: '03',
  titleHtml: 'Оберіть рішення<br>під ваш заклад',
  items: [
    {
      image: { src: `${BASE}img/kstar-inverter.png`, alt: 'Настінний гібридний інвертор', width: 700, height: 700, class: 's1' },
      power: '12/20',
      unit: 'кВт інвертор / кВт·год АКБ',
      badge: null,
      hot: false,
      desc: 'Невеликі школи, садки, адміністративні приміщення',
      features: ['Трифазний інвертор', 'LiFePO₄ АКБ', 'Масштабування'],
    },
    {
      image: { src: `${BASE}img/kstar-batteries.png`, alt: 'LiFePO₄ акумуляторні вежі', width: 700, height: 700, class: 's2' },
      power: '20/50',
      unit: 'кВт інвертор / кВт·год АКБ',
      badge: 'рекомендовано',
      hot: true,
      desc: 'Ліцеї, гімназії, середні заклади',
      features: ['Більша потужність', 'Вища продуктивність', { text: 'Сонячні панелі', hl: true }],
    },
    {
      image: { src: `${BASE}img/kstar-cabinet.png`, alt: 'Промислова система резервного живлення', width: 1000, height: 1000, class: 's3' },
      power: '50/100',
      unit: 'кВт інвертор / кВт·год АКБ',
      badge: null,
      hot: false,
      desc: 'Великі ліцеї, ПТУ, комплекси',
      features: ['Макс. потужність', 'Масштабованість', 'Велике навантаження'],
    },
  ],
  buttonLabel: 'Залишити заявку',
};

export const why = {
  num: '04',
  titleHtml: 'Повний цикл, а не<br>просто постачання',
  brandKicker: 'EDDY GROUP + MAST',
  brandText:
    'Не просто постачальник обладнання, а підрядник, який відповідає за результат — від розрахунку потужності до сервісу після монтажу.',
  cards: [
    { title: 'Власний склад', text: 'Наявність обладнання скорочує строки поставки.' },
    { title: 'Дозволи на роботи', text: 'Роботи за чинними нормами та вимогами.' },
    { title: 'Технічна підтримка', text: 'Консультації на всіх етапах проєкту.' },
    { title: 'Віддалений моніторинг', text: 'Контроль стану системи через застосунок або вебінтерфейс.' },
  ],
};

export const cta = {
  tag: 'Підготуймо заклад до зими',
  title: 'Залиште заявку — і ми все порахуємо',
  text: 'Підберемо комплектацію під потужність і навантаження вашого закладу та узгодимо зручний час монтажу.',
  form: {
    action: 'https://api.web3forms.com/submit',
    accessKey: 'a47daedf-28cf-4bfc-ad2d-617067cd9fb2',
    subject: 'Заявка з лендінгу Svitlo',
    fromName: 'EDDY Svitlo',
    submitLabel: 'Надіслати заявку',
  },
};

export const ticker = {
  phrases: [
    'Тепло і світло цілу зиму',
    'Резервне живлення «під ключ»',
    'Монтаж по всій Україні',
    'Гарантія виробника',
    'LiFePO₄ АКБ',
  ],
};

export const footer = {
  description:
    'Резервне живлення «під ключ» для закладів освіти: гібридні інвертори, LiFePO₄ АКБ, монтаж і сервіс по Україні.',
  navTitle: 'Навігація',
  navLinks: [
    { label: 'Принцип роботи', href: '#how' },
    { label: 'Комплектації', href: '#plans' },
    { label: 'Контакти', href: '#contact' },
  ],
  officeTitle: 'Офіс',
  officePhone: { label: '+38 (044) 299 5 299', href: 'tel:+380442995299' },
  officeEmail: { label: 'office@eddygroup.eu', href: 'mailto:office@eddygroup.eu' },
  officeAddress: 'Київ, вул. Глибочицька, 32',
  serviceTitle: 'Сервісна підтримка',
  serviceHours: 'Пн-Пт: 09:00-18:00',
  servicePhone: { label: '+380 93 270 82 04', href: 'tel:+380932708204' },
  serviceEmail: { label: 'service@eddygroup.eu', href: 'mailto:service@eddygroup.eu' },
  warranty: { label: 'Гарантійні умови', href: 'https://eddygroup.eu/wp-content/uploads/2026/03/garantijni-umovy.docx' },
  copyright: '© 2026 EDDY GROUP · SVITLO',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61576618363606', icon: 'facebook' },
    { label: 'YouTube', href: 'https://www.youtube.com/@eddy-group', icon: 'youtube' },
  ],
};
