import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Главная - УК Мой Дом' }
  },
  {
    path: '/about/',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'О компании - УК Мой Дом' }
  },
  {
    path: '/houses/',
    name: 'houses',
    component: () => import('@/views/HousesView.vue'),
    meta: { title: 'Дома в управлении - УК Мой Дом' }
  },
  {
    path: '/houses/:id',
    name: 'house-detail',
    component: () => import('@/views/HouseDetailView.vue'),
    meta: { title: 'Дом - УК Мой Дом' }
  },
  {
    path: '/services/',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: { title: 'Стоимость услуг - УК Мой Дом' }
  },
  {
    path: '/gallery/',
    name: 'gallery',
    component: () => import('@/views/GalleryView.vue'),
    meta: { title: 'Фотогалерея - УК Мой Дом' }
  },
  {
    path: '/resident/',
    name: 'resident',
    component: () => import('@/views/ResidentView.vue'),
    meta: { title: 'Жителю - УК Мой Дом' }
  },
  {
    path: '/disclosure/',
    name: 'disclosure',
    component: () => import('@/views/DisclosureView.vue'),
    meta: { title: 'Раскрытие информации - УК Мой Дом' }
  },
  {
    path: '/contacts/',
    name: 'contacts',
    component: () => import('@/views/ContactsView.vue'),
    meta: { title: 'Контакты - УК Мой Дом' }
  },
  {
    path: '/emergency/',
    name: 'emergency',
    component: () => import('@/views/EmergencyView.vue'),
    meta: { title: 'Экстренные объявления - УК Мой Дом' }
  },
  {
    path: '/news/',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
    meta: { title: 'Новости - УК Мой Дом' }
  },
  {
    path: '/faq/',
    name: 'faq',
    component: () => import('@/views/FaqView.vue'),
    meta: { title: 'Частые вопросы - УК Мой Дом' }
  },
  {
    path: '/feedback/',
    name: 'feedback',
    component: () => import('@/views/FeedbackView.vue'),
    meta: { title: 'Обратная связь - УК Мой Дом' }
  },
  {
    path: '/documents/templates/',
    name: 'documents-templates',
    component: () => import('@/views/DocumentsTemplatesView.vue'),
    meta: { title: 'Шаблоны документов - УК Мой Дом' }
  },
  {
    path: '/calculator/',
    name: 'calculator',
    component: () => import('@/views/CalculatorView.vue'),
    meta: { title: 'Калькулятор платежей - УК Мой Дом' }
  },
  {
    path: '/mobile-app/',
    name: 'mobile-app',
    component: () => import('@/views/MobileAppView.vue'),
    meta: { title: 'Мобильное приложение - УК Мой Дом' }
  },
  {
    path: '/legal-info/',
    name: 'legal-info',
    component: () => import('@/views/LegalInfoView.vue'),
    meta: { title: 'Правовая информация - УК Мой Дом' }
  },
  {
    path: '/sitemap/',
    name: 'sitemap',
    component: () => import('@/views/SitemapView.vue'),
    meta: { title: 'Карта сайта - УК Мой Дом' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'УК Мой Дом'
  next()
})

export default router
