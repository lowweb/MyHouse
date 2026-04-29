export const buildings = [
  {
    id: 1,
    address: 'ул. Ленина, д. 15',
    year: 1987,
    floors: 9,
    area: 4850,
    apartments: 72,
    type: 'Кирпичный',
    series: '1-447',
    status: 'В управлении с 2015 г.',
    image: '/images/building1.jpg'
  },
  {
    id: 2,
    address: 'пр. Мира, д. 42',
    year: 2005,
    floors: 16,
    area: 12300,
    apartments: 144,
    type: 'Монолит-кирпич',
    series: 'П-44Т',
    status: 'В управлении с 2019 г.',
    image: '/images/building2.jpg'
  },
  {
    id: 3,
    address: 'ул. Садовая, д. 8',
    year: 1975,
    floors: 5,
    area: 2100,
    apartments: 40,
    type: 'Панельный',
    series: '1-335',
    status: 'В управлении с 2010 г.',
    image: '/images/building3.jpg'
  },
  {
    id: 4,
    address: 'бульвар Победы, д. 23А',
    year: 2018,
    floors: 25,
    area: 18750,
    apartments: 210,
    type: 'Монолитный',
    series: 'Современная',
    status: 'В управлении с 2020 г.',
    image: '/images/building4.jpg'
  },
  {
    id: 5,
    address: 'ул. Молодёжная, д. 5',
    year: 1992,
    floors: 10,
    area: 6200,
    apartments: 90,
    type: 'Кирпичный',
    series: '1-464',
    status: 'В управлении с 2012 г.',
    image: '/images/building5.jpg'
  },
  {
    id: 6,
    address: 'пер. Школьный, д. 12',
    year: 1980,
    floors: 5,
    area: 1850,
    apartments: 30,
    type: 'Панельный',
    series: '1-335А',
    status: 'В управлении с 2014 г.',
    image: '/images/building6.jpg'
  },
  {
    id: 7,
    address: 'ул. Центральная, д. 67',
    year: 2010,
    floors: 12,
    area: 9400,
    apartments: 108,
    type: 'Кирпич-монолит',
    series: 'Улучшенная',
    status: 'В управлении с 2021 г.',
    image: '/images/building7.jpg'
  },
  {
    id: 8,
    address: 'ул. Заречная, д. 3',
    year: 1968,
    floors: 4,
    area: 1200,
    apartments: 24,
    type: 'Кирпичный',
    series: 'Малосемейка',
    status: 'В управлении с 2011 г.',
    image: '/images/building8.jpg'
  }
]

export const emergencyAnnouncements = [
  {
    id: 1,
    title: 'Отключение горячей воды',
    date: '2024-01-15',
    addresses: ['ул. Ленина, д. 15-25', 'пр. Мира, д. 40-50'],
    description: 'В связи с проведением ремонтных работ на теплотрассе'
  },
  {
    id: 2,
    title: 'Отключение электроэнергии',
    date: '2024-01-16',
    addresses: ['ул. Садовая, д. 8-12'],
    description: 'Плановые работы на подстанции'
  }
]

export const news = [
  {
    id: 1,
    title: 'Проведение общего собрания собственников',
    date: '2024-01-10',
    category: 'Собрания',
    preview: 'Уважаемые собственники! Приглашаем вас принять участие в общем собрании...',
    image: '/images/news1.jpg'
  },
  {
    id: 2,
    title: 'Завершение работ по благоустройству двора',
    date: '2024-01-08',
    category: 'Благоустройство',
    preview: 'Работы по благоустройству дворовой территории завершены...',
    image: '/images/news2.jpg'
  },
  {
    id: 3,
    title: 'Изменение тарифов на коммунальные услуги',
    date: '2024-01-05',
    category: 'Тарифы',
    preview: 'Информируем вас об изменении тарифов на коммунальные услуги...',
    image: '/images/news3.jpg'
  }
]

export const companyFacts = [
  { id: 1, value: '15+', label: 'Лет опыта', icon: '🏢' },
  { id: 2, value: '150+', label: 'Домов в управлении', icon: '🏠' },
  { id: 3, value: '10 000+', label: 'Квартир', icon: '👥' },
  { id: 4, value: '98%', label: 'Довольных клиентов', icon: '⭐' }
]

export const galleryCategories = [
  { id: 'landscaping', name: 'Благоустройство' },
  { id: 'holidays', name: 'Праздники' },
  { id: 'subbotniks', name: 'Субботники' },
  { id: 'before-after', name: 'До и после ремонта' },
  { id: 'awards', name: 'Награды' }
]

export const faqCategories = [
  { id: 'payments', name: 'Оплата и тарифы' },
  { id: 'maintenance', name: 'Содержание и ремонт' },
  { id: 'documents', name: 'Документы' },
  { id: 'general', name: 'Общие вопросы' }
]

export const tariffs = [
  {
    id: 1,
    name: 'Содержание жилья',
    unit: 'руб/м²',
    price: 28.50,
    period: '2024'
  },
  {
    id: 2,
    name: 'Холодное водоснабжение',
    unit: 'руб/м³',
    price: 42.15,
    period: '2024'
  },
  {
    id: 3,
    name: 'Горячее водоснабжение',
    unit: 'руб/м³',
    price: 195.30,
    period: '2024'
  },
  {
    id: 4,
    name: 'Отопление',
    unit: 'руб/Гкал',
    price: 2150.00,
    period: '2024'
  },
  {
    id: 5,
    name: 'Электроэнергия',
    unit: 'руб/кВт·ч',
    price: 4.85,
    period: '2024'
  },
  {
    id: 6,
    name: 'Водоотведение',
    unit: 'руб/м³',
    price: 35.20,
    period: '2024'
  }
]
