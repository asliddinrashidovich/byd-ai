import { Vehicle, Dealer, Language } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'song-plus-dmi',
    name: 'BYD SONG PLUS DM-i',
    type: 'hybrid',
    basePriceUZS: 387200000,
    featuredImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
    description: {
      uz: 'Uzbekistondagi eng ommabop gibrid krossover. DM-i super gibrid texnologiyasi bilan tejamkorlik va yuqori dinamika uygʻunligi.',
      ru: 'Самый популярный гибридный кроссовер в Узбекистане. Сочетание экономичности и высокой динамики с супергибридной технологией DM-i.',
      en: 'The most popular hybrid crossover in Uzbekistan. A combination of efficiency and high dynamics powered by DM-i super hybrid technology.',
    },
    specs: {
      battery: '18.3 kWh / 26.6 kWh Blade Battery',
      range: '110 km (EV) / 1150 km (Combined)',
      power: '197 hp (145 kW)',
      acceleration: '7.9 s',
      maxSpeed: '170 km/h',
      dimensions: '4775 × 1890 × 1680 mm',
    },
    colors: [
      {
        id: 'snow-white',
        name: { uz: 'Qor oq', ru: 'Снежный белый', en: 'Snow White' },
        hex: '#FFFFFF',
        bgClass: 'bg-white border-gray-300',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
      {
        id: 'delorean-grey',
        name: { uz: 'Toʻq kulrang', ru: 'Темно-серый', en: 'Delorean Grey' },
        hex: '#555555',
        bgClass: 'bg-gray-600',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
      {
        id: 'emerald-green',
        name: { uz: 'Zumrad yashil', ru: 'Изумрудный зеленый', en: 'Emerald Green' },
        hex: '#0A3E2B',
        bgClass: 'bg-emerald-950',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 4500000,
      },
    ],
    wheels: [
      {
        id: 'standard-19',
        name: { uz: '19 dyuymli standart disklar', ru: '19-дюймовые стандартные диски', en: '19-inch Standard Alloys' },
        size: '19"',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=400',
        extraPrice: 0,
      },
      {
        id: 'sport-20',
        name: { uz: '20 dyuymli sport disklar', ru: '20-дюймовые спортивные диски', en: '20-inch Sport Performance Alloys' },
        size: '20"',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400',
        extraPrice: 8500000,
      },
    ],
    interiors: [
      {
        id: 'classic-grey',
        name: { uz: 'Klassik kulrang-koʻk', ru: 'Классический серо-синий', en: 'Classic Grey-Blue' },
        hex: '#2B3A4A',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=500',
        extraPrice: 0,
      },
      {
        id: 'premium-brown',
        name: { uz: 'Premium jigarrang-bej', ru: 'Премиум коричнево-бежевый', en: 'Premium Brown-Beige' },
        hex: '#8B5A2B',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=500',
        extraPrice: 6000000,
      },
    ],
  },
  {
    id: 'han-ev',
    name: 'BYD HAN EV',
    type: 'ev',
    basePriceUZS: 694000000,
    featuredImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000',
    description: {
      uz: 'Flagman premium-klass elektr sedani. Aerodinamik dizayn, tengsiz lyuks salon va aqlbovar qilmas 3.9 soniyali tezlanish.',
      ru: 'Флагманский электроседан премиум-класса. Аэродинамичный дизайн, непревзойденный роскошный салон и невероятный разгон за 3.9 секунды.',
      en: 'The flagship premium electric sedan. Streamlined aerodynamic design, unparalleled luxury interior, and an incredible 3.9-second acceleration.',
    },
    specs: {
      battery: '85.4 kWh Blade Battery',
      range: '715 km (CLTC)',
      power: '517 hp (380 kW)',
      acceleration: '3.9 s',
      maxSpeed: '185 km/h',
      dimensions: '4995 × 1910 × 1495 mm',
    },
    colors: [
      {
        id: 'snow-white',
        name: { uz: 'Qor oq', ru: 'Снежный белый', en: 'Snow White' },
        hex: '#FFFFFF',
        bgClass: 'bg-white border-gray-300',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
      {
        id: 'space-black',
        name: { uz: 'Chuqur qora', ru: 'Глубокий черный', en: 'Space Black' },
        hex: '#0A0A0A',
        bgClass: 'bg-black',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
      {
        id: 'emperor-red',
        name: { uz: 'Imperator qizil', ru: 'Императорский красный', en: 'Emperor Red' },
        hex: '#9B111E',
        bgClass: 'bg-red-800',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 12000000,
      },
      {
        id: 'sci-fi-blue',
        name: { uz: 'Koinot koʻki', ru: 'Космический синий', en: 'Sci-Fi Blue' },
        hex: '#1B2C54',
        bgClass: 'bg-blue-950',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 8000000,
      },
    ],
    wheels: [
      {
        id: 'han-standard-19',
        name: { uz: '19 dyuymli aerodinamik disklar', ru: '19-дюймовые аэродинамические диски', en: '19-inch Aerodynamic Alloys' },
        size: '19"',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=400',
        extraPrice: 0,
      },
      {
        id: 'han-sport-20',
        name: { uz: '20 dyuymli koʻp tarmoqli sport disklar', ru: '20-дюймовые многоспицевые спортивные диски', en: '20-inch Multi-spoke Sport Alloys' },
        size: '20"',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400',
        extraPrice: 15000000,
      },
    ],
    interiors: [
      {
        id: 'terracotta-orange',
        name: { uz: 'Terrakota olovrang', ru: 'Терракотовый оранжевый', en: 'Terracotta Orange' },
        hex: '#C15C3D',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=500',
        extraPrice: 0,
      },
      {
        id: 'nordic-grey',
        name: { uz: 'Shimoliy toʻq kulrang', ru: 'Северный темно-серый', en: 'Nordic Dark Grey' },
        hex: '#3E4145',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=500',
        extraPrice: 5000000,
      },
    ],
  },
  {
    id: 'chazor-dmi',
    name: 'BYD CHAZOR DM-i',
    type: 'hybrid',
    basePriceUZS: 289300000,
    featuredImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000',
    description: {
      uz: 'Dinamik va zamonaviy gibrid sedan. Kam yoqilgʻi sarfi bilan shahar sharoitida ideal harakatlanish imkoniyati.',
      ru: 'Динамичный и современный гибридный седан. Минимальный расход топлива делает его идеальным выбором для города.',
      en: 'A dynamic and modern hybrid sedan. Extremely low fuel consumption makes it the perfect vehicle for city driving.',
    },
    specs: {
      battery: '8.3 kWh / 18.3 kWh Blade Battery',
      range: '120 km (EV) / 1200 km (Combined)',
      power: '110 hp (Gasoline) + 197 hp (Electric)',
      acceleration: '7.3 s',
      maxSpeed: '185 km/h',
      dimensions: '4780 × 1837 × 1495 mm',
    },
    colors: [
      {
        id: 'glacier-white',
        name: { uz: 'Muzlik oq', ru: 'Ледниковый белый', en: 'Glacier White' },
        hex: '#F5F6F8',
        bgClass: 'bg-slate-50 border-gray-300',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
      {
        id: 'sky-grey',
        name: { uz: 'Osmon kulrang', ru: 'Небесно-серый', en: 'Sky Grey' },
        hex: '#8F9499',
        bgClass: 'bg-slate-400',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
    ],
    wheels: [
      {
        id: 'chazor-std-17',
        name: { uz: '17 dyuymli standart disklar', ru: '17-дюймовые стандартные диски', en: '17-inch Standard Alloys' },
        size: '17"',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=400',
        extraPrice: 0,
      },
    ],
    interiors: [
      {
        id: 'sport-dark',
        name: { uz: 'Sportiv toʻq ichki salon', ru: 'Спортивный темный салон', en: 'Sporty Dark Interior' },
        hex: '#1E2229',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=500',
        extraPrice: 0,
      },
    ],
  },
  {
    id: 'tang-ev',
    name: 'BYD TANG EV',
    type: 'ev',
    basePriceUZS: 742000000,
    featuredImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000',
    description: {
      uz: 'Premium darajadagi 7 oʻrinli oilaviy elektr SUV. Yuqori darajadagi xavfsizlik tizimi va 4 gʻildirakli toʻliq boshqaruv.',
      ru: 'Семейный 7-местный электрокроссовер премиум-класса. Высочайший уровень безопасности и система полного привода.',
      en: 'Premium 7-seater family electric SUV. The highest level of safety coupled with advanced all-wheel drive performance.',
    },
    specs: {
      battery: '108.8 kWh Blade Battery',
      range: '635 km (4WD CLTC)',
      power: '517 hp (380 kW)',
      acceleration: '4.4 s',
      maxSpeed: '180 km/h',
      dimensions: '4900 × 1950 × 1725 mm',
    },
    colors: [
      {
        id: 'arctic-white',
        name: { uz: 'Arktika oqi', ru: 'Арктический белый', en: 'Arctic White' },
        hex: '#FFFFFF',
        bgClass: 'bg-white border-gray-300',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
      {
        id: 'emperor-red',
        name: { uz: 'Imperator qizil', ru: 'Императорский красный', en: 'Emperor Red' },
        hex: '#9B111E',
        bgClass: 'bg-red-800',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 12000000,
      },
    ],
    wheels: [
      {
        id: 'tang-std-21',
        name: { uz: '21 dyuymli sport disklar', ru: '21-дюймовые спортивные диски', en: '21-inch Sport Performance Alloys' },
        size: '21"',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400',
        extraPrice: 0,
      },
    ],
    interiors: [
      {
        id: 'luxury-tan',
        name: { uz: 'Malahit jigarrang', ru: 'Малахитово-коричневый', en: 'Malachite Tan Leather' },
        hex: '#A0522D',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=500',
        extraPrice: 0,
      },
    ],
  },
  {
    id: 'seagull',
    name: 'BYD SEAGULL',
    type: 'ev',
    basePriceUZS: 175000000,
    featuredImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000',
    description: {
      uz: 'Yilni, oson va oʻta tejamkor shahar elektromobili. Diqqatni tortuvchi modern dizayn va optimal masofa zaxirasi.',
      ru: 'Компактный, маневренный и очень экономичный городской электромобиль. Привлекающий внимание дизайн и оптимальный запас хода.',
      en: 'Compact, agile, and highly economical urban EV hatchback. High-contrast modern design and excellent utility for daily commuting.',
    },
    specs: {
      battery: '38.8 kWh Blade Battery',
      range: '405 km (CLTC)',
      power: '75 hp (55 kW)',
      acceleration: '13.9 s',
      maxSpeed: '130 km/h',
      dimensions: '3780 × 1715 × 1540 mm',
    },
    colors: [
      {
        id: 'sprout-green',
        name: { uz: 'Yashil kurtak', ru: 'Зеленый росток', en: 'Sprout Green' },
        hex: '#D1E231',
        bgClass: 'bg-[#D1E231]',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
      {
        id: 'polar-white',
        name: { uz: 'Qutb oqi', ru: 'Полярный белый', en: 'Polar White' },
        hex: '#FFFFFF',
        bgClass: 'bg-white border-gray-300',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000',
        extraPrice: 0,
      },
    ],
    wheels: [
      {
        id: 'seagull-std-16',
        name: { uz: '16 dyuymli standart disklar', ru: '16-дюймовые стандартные диски', en: '16-inch Standard Alloys' },
        size: '16"',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=400',
        extraPrice: 0,
      },
    ],
    interiors: [
      {
        id: 'cyber-blue',
        name: { uz: 'Kiber moviy-kulrang', ru: 'Кибер сине-серый', en: 'Cyber Blue-Grey' },
        hex: '#3E5D7A',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=500',
        extraPrice: 0,
      },
    ],
  },
];

export const DEALERS: Dealer[] = [
  {
    id: 'byd-sergeli',
    name: {
      uz: 'BYD Sergeli dilerlik markazi',
      ru: 'Дилерский центр BYD Sergeli',
      en: 'BYD Sergeli Dealership',
    },
    address: {
      uz: 'Toshkent sh., Sergeli tumani, THAY, 109-uy',
      ru: 'г. Ташкент, Сергелийский р-н, ТКАД, д. 109',
      en: '109 TKAD, Sergeli district, Tashkent',
    },
    phone: '+998 78 122 88 88',
    hours: {
      uz: 'Du - Yak: 09:00 - 20:00',
      ru: 'Пн - Вс: 09:00 - 20:00',
      en: 'Mon - Sun: 09:00 - 20:00',
    },
    city: { uz: 'Toshkent', ru: 'Ташкент', en: 'Tashkent' },
    lat: 41.2212,
    lng: 69.2155,
  },
  {
    id: 'byd-yashnabod',
    name: {
      uz: 'BYD Yashnobod dilerlik markazi',
      ru: 'Дилерский центр BYD Yashnabod',
      en: 'BYD Yashnabod Dealership',
    },
    address: {
      uz: 'Toshkent sh., Yashnobod tumani, Mahtumquli koʻchasi, 79-uy',
      ru: 'г. Ташкент, Яшнабадский р-н, ул. Махтумкули, д. 79',
      en: '79 Mahtumquli str., Yashnabod district, Tashkent',
    },
    phone: '+998 78 122 66 66',
    hours: {
      uz: 'Du - Yak: 09:00 - 21:00',
      ru: 'Пн - Вс: 09:00 - 21:00',
      en: 'Mon - Sun: 09:00 - 21:00',
    },
    city: { uz: 'Toshkent', ru: 'Ташкент', en: 'Tashkent' },
    lat: 41.3055,
    lng: 69.3245,
  },
  {
    id: 'byd-samarkand',
    name: {
      uz: 'BYD Samarqand dilerlik markazi',
      ru: 'Дилерский центр BYD Самарканд',
      en: 'BYD Samarkand Dealership',
    },
    address: {
      uz: 'Samarqand sh., Dahbed koʻchasi, 14A-uy',
      ru: 'г. Самарканд, ул. Дахбед, д. 14А',
      en: '14A Dahbed str., Samarkand',
    },
    phone: '+998 66 230 40 40',
    hours: {
      uz: 'Du - Shan: 09:00 - 19:00',
      ru: 'Пн - Сб: 09:00 - 19:00',
      en: 'Mon - Sat: 09:00 - 19:00',
    },
    city: { uz: 'Samarqand', ru: 'Самарканд', en: 'Samarkand' },
    lat: 39.6685,
    lng: 66.9555,
  },
  {
    id: 'byd-bukhara',
    name: {
      uz: 'BYD Buxoro dilerlik markazi',
      ru: 'Дилерский центр BYD Бухара',
      en: 'BYD Bukhara Dealership',
    },
    address: {
      uz: 'Buxoro sh., Gijduvon koʻchasi, 240-uy',
      ru: 'г. Бухара, ул. Гиждуванская, д. 240',
      en: '240 Gijduvon str., Bukhara',
    },
    phone: '+998 65 505 55 55',
    hours: {
      uz: 'Du - Shan: 09:00 - 18:00',
      ru: 'Пн - Сб: 09:00 - 18:00',
      en: 'Mon - Sat: 09:00 - 18:00',
    },
    city: { uz: 'Buxoro', ru: 'Бухара', en: 'Bukhara' },
    lat: 39.7825,
    lng: 64.4215,
  },
  {
    id: 'byd-fergana',
    name: {
      uz: 'BYD Fargʻona dilerlik markazi',
      ru: 'Дилерский центр BYD Фергана',
      en: 'BYD Fergana Dealership',
    },
    address: {
      uz: 'Fargʻona sh., Al-Fargʻoniy koʻchasi, 50-uy',
      ru: 'г. Фергана, ул. Аль-Фергани, д. 50',
      en: '50 Al-Ferganiy str., Fergana',
    },
    phone: '+998 73 244 11 11',
    hours: {
      uz: 'Du - Yak: 09:00 - 19:00',
      ru: 'Пн - Вс: 09:00 - 19:00',
      en: 'Mon - Sun: 09:00 - 19:00',
    },
    city: { uz: 'Fargʻona', ru: 'Фергана', en: 'Fergana' },
    lat: 40.3864,
    lng: 71.7864,
  },
];

export const DICTIONARY: Record<string, Record<Language, string>> = {
  // Navigation
  models: { uz: 'Modellar', ru: 'Модели', en: 'Models' },
  configurator: { uz: 'Konfigurator', ru: 'Конфигуратор', en: 'Configurator' },
  finance: { uz: 'Kredit kalkulyatori', ru: 'Калькулятор кредита', en: 'Loan Calculator' },
  dealers: { uz: 'Dilerlar', ru: 'Дилеры', en: 'Showrooms' },
  technology: { uz: 'Texnologiyalar', ru: 'Технологии', en: 'Technology' },
  bookTestDrive: { uz: 'Test-drayv band qilish', ru: 'Запись на тест-драйв', en: 'Book Test Drive' },
  
  // Hero
  heroTitle: { uz: 'KELAJAK ELEKTRDA', ru: 'БУДУЩЕЕ ЗА ЭЛЕКТРИЧЕСТВОМ', en: 'THE FUTURE IS ELECTRIC' },
  heroSubtitle: { uz: 'BYD bilan yashil va texnologik inqilobni his eting. Oʻzbekistondagi rasmiy dilerlik tarmogʻi.', ru: 'Почувствуйте зеленую и технологическую революцию с BYD. Официальная дилерская сеть в Узбекистане.', en: 'Experience the green and technological revolution with BYD. Official dealership network in Uzbekistan.' },
  exploreModels: { uz: 'Modellarni koʻrish', ru: 'Посмотреть модели', en: 'Explore Models' },
  configureYourOwn: { uz: 'Oʻz mashinangizni yarating', ru: 'Собрать свой автомобиль', en: 'Configure Yours' },

  // Tabs / Filters
  allVehicles: { uz: 'Barcha avtomobillar', ru: 'Все автомобили', en: 'All Vehicles' },
  hybrids: { uz: 'Super gibrid (DM-i)', ru: 'Супергибриды (DM-i)', en: 'Super Hybrids (DM-i)' },
  evs: { uz: 'Elektromobillar (EV)', ru: 'Электромобили (EV)', en: 'Electric Vehicles (EV)' },

  // Specs & Labels
  specsLabel: { uz: 'Texnik xususiyatlari', ru: 'Технические характеристики', en: 'Technical Specifications' },
  batteryCap: { uz: 'Batareya sigʻimi', ru: 'Емкость батареи', en: 'Battery Capacity' },
  drivingRange: { uz: 'Yurish masofasi', ru: 'Запас хода', en: 'Driving Range' },
  maxPower: { uz: 'Maksimal quvvat', ru: 'Макс. мощность', en: 'Max Power' },
  accel: { uz: '0-100 km/s tezlanish', ru: 'Разгон 0-100 км/ч', en: '0-100 km/h Accel' },
  topSpeed: { uz: 'Maksimal tezlik', ru: 'Максимальная скорость', en: 'Top Speed' },
  dimensions: { uz: 'Oʻlchamlari', ru: 'Размеры', en: 'Dimensions' },
  fromPrice: { uz: 'dan boshlab', ru: 'от', en: 'starting from' },
  configure: { uz: 'Konstruktor', ru: 'Конфигурировать', en: 'Configure' },
  viewDetails: { uz: 'Batafsil maʻlumot', ru: 'Подробнее', en: 'Details' },

  // Configurator
  configTitle: { uz: 'BYD Interaktiv Konstruktor', ru: 'Интерактивный конструктор BYD', en: 'BYD Interactive Configurator' },
  configSubtitle: { uz: 'Rang, gildiraklar va salonnni tanlang, narxni real vaqtda hisoblang.', ru: 'Выбирайте цвет, диски и салон, рассчитывайте стоимость в реальном времени.', en: 'Customize the exterior, wheels, and interior. Get real-time price calculation.' },
  selectModel: { uz: 'Modelni tanlang', ru: 'Выберите модель', en: 'Select Model' },
  chooseColor: { uz: 'Kuzov rangi', ru: 'Цвет кузова', en: 'Body Color' },
  chooseWheels: { uz: 'Gildiraklar toʻplami', ru: 'Колесные диски', en: 'Wheels & Alloys' },
  chooseInterior: { uz: 'Salon dizayni va rangi', ru: 'Дизайн и цвет салона', en: 'Interior Design' },
  basePrice: { uz: 'Boshlangʻich narx', ru: 'Базовая цена', en: 'Base Price' },
  selectedOptionsPrice: { uz: 'Tanlangan opsiyalar', ru: 'Выбранные опции', en: 'Selected Options' },
  totalPrice: { uz: 'Yakuniy narx', ru: 'Итоговая цена', en: 'Total Price' },
  confirmConfig: { uz: 'Konfiguratsiyani saqlash va kreditni hisoblash', ru: 'Сохранить конфигурацию и рассчитать кредит', en: 'Save & Calculate Financing' },

  // Calculator
  calcTitle: { uz: 'Imtiyozli Avtokredit Kalkulyatori', ru: 'Калькулятор льготного автокредита', en: 'Financing & Loan Calculator' },
  calcSubtitle: { uz: 'Rasmiy dilerlik doirasida eng past foiz stavkalari bilan hisob-kitob.', ru: 'Расчет по самым низким процентным ставкам в рамках официального дилерства.', en: 'Calculate your flexible monthly payments with official BYD low-interest rates.' },
  downPayment: { uz: 'Boshlangʻich toʻlov', ru: 'Первоначальный взнос', en: 'Down Payment' },
  loanDuration: { uz: 'Kredit muddati', ru: 'Срок кредита', en: 'Loan Duration' },
  interestRate: { uz: 'Yillik foiz stavkasi', ru: 'Годовая процентная ставка', en: 'Annual Interest Rate' },
  monthlyPayment: { uz: 'Oylik toʻlov', ru: 'Ежемесячный платеж', en: 'Monthly Payment' },
  totalInterest: { uz: 'Umumiy foiz toʻlovi', ru: 'Общая сумма процентов', en: 'Total Interest Payable' },
  totalAmountPaid: { uz: 'Kreditning umumiy qiymati', ru: 'Общая стоимость кредита', en: 'Total Credit Cost' },
  months: { uz: 'oy', ru: 'мес', en: 'months' },
  applyForCredit: { uz: 'Kreditga ariza topshirish', ru: 'Подать заявку на кредит', en: 'Apply for Financing' },

  // Dealerships
  dealersTitle: { uz: 'Rasmiy BYD Dilerlik Tarmogʻi', ru: 'Официальная дилерская сеть BYD', en: 'Official BYD Showrooms' },
  dealersSubtitle: { uz: 'Oʻzbekiston boʻylab rasmiy kafolat, servis xizmati va original ehtiyot qismlari.', ru: 'Официальная гарантия, сервисное обслуживание и оригинальные запчасти по всему Узбекистану.', en: 'Official factory warranty, certified service centers, and genuine parts across Uzbekistan.' },
  searchCity: { uz: 'Shaharni tanlang', ru: 'Выберите город', en: 'Select City' },
  allCities: { uz: 'Barcha shaharlar', ru: 'Все города', en: 'All Cities' },
  callDealer: { uz: 'Qongʻiroq qilish', ru: 'Позвонить', en: 'Call Showroom' },
  viewOnMap: { uz: 'Xaritada korish', ru: 'Показать на карте', en: 'View on Map' },

  // Test drive form
  tdTitle: { uz: 'Test-Drayvga Yozilish', ru: 'Запись на тест-драйв', en: 'Book a Test Drive' },
  tdSubtitle: { uz: 'BYD elektromobilini shaxsan haydab, texnologiya va qulaylikni his qiling.', ru: 'Испытайте электромобиль BYD лично, почувствуйте технологии и комфорт.', en: 'Test drive your favorite BYD model to feel the supreme power, safety, and comfort.' },
  fullName: { uz: 'Toʻliq ism-shrifingiz', ru: 'Ваше полное имя', en: 'Full Name' },
  phoneLabel: { uz: 'Telefon raqamingiz', ru: 'Номер телефона', en: 'Phone Number' },
  selectDealer: { uz: 'Dilerlik markazini tanlang', ru: 'Выберите дилерский центр', en: 'Select Showroom Center' },
  selectDate: { uz: 'Sana', ru: 'Дата', en: 'Select Date' },
  selectTime: { uz: 'Vaqt', ru: 'Время', en: 'Time Slot' },
  consentCheck: { uz: 'Shaxsiy maʻlumotlarni qayta ishlashga rozilik beraman', ru: 'Соглашаюсь на обработку персональных данных', en: 'I consent to the processing of my personal data' },
  submitBooking: { uz: 'Ariza yuborish', ru: 'Отправить заявку', en: 'Submit Appointment' },
  bookingSuccess: { uz: 'Sizning arizangiz muvaffaqiyatli qabul qilindi! Tez orada operatorimiz aloqaga chiqadi.', ru: 'Ваша заявка успешно принята! Наш оператор свяжется с вами в ближайшее время.', en: 'Your request has been successfully submitted! Our manager will contact you shortly.' },
  closeBtn: { uz: 'Yopish', ru: 'Закрыть', en: 'Close' },

  // Tech items
  techTitle: { uz: 'BYD Innovatsion Texnologiyalari', ru: 'Инновационные технологии BYD', en: 'BYD Global Technologies' },
  bladeBatteryTitle: { uz: 'Blade Battery Batareyasi', ru: 'Революционная Blade Battery', en: 'Revolutionary Blade Battery' },
  bladeBatteryDesc: { uz: 'Ignasimon teshib otish sinovlaridan muvaffaqiyatli otgan, dunyodagi eng xavfsiz litiy-temir-fosfat (LFP) batareyasi. Portlamaydi va yonmaydi.', ru: 'Самая безопасная в мире литий-железо-фосфатная (LFP) батарея, успешно прошедшая испытания на сквозное прокалывание иглой. Не возгорается.', en: 'The world\'s safest lithium-iron-phosphate (LFP) battery, passing extreme nail penetration tests with zero fires or smoke.' },
  dmiTitle: { uz: 'DM-i Super Gibrid Tizimi', ru: 'Супергибрид DM-i', en: 'DM-i Super Hybrid System' },
  dmiDesc: { uz: 'Elektr rejimida ustuvor ishlashga asoslangan gibrid tizim. Yoqilgʻi sarfini 100 km uchun 3.8 litrgacha kamaytiradi, yurish masofasini esa 1200 km gacha oshiradi.', ru: 'Гибридная система с приоритетом электропривода. Снижает расход топлива до 3.8 л на 100 км и увеличивает общий запас хода до 1200 км.', en: 'Electricity-oriented plug-in hybrid architecture. Cuts fuel consumption down to 3.8L/100km and extends combined range up to 1200km.' },
  eplatformTitle: { uz: 'e-Platform 3.0 Platformasi', ru: 'Платформа e-Platform 3.0', en: 'Advanced e-Platform 3.0' },
  eplatformDesc: { uz: 'Elektromobillar uchun maxsus yaratilgan yuqori integratsiyalashgan 8-in-1 elektr yuritmali, sovuq haroratga chidamli issiqlik nasosiga ega xavfsiz arxitektura.', ru: 'Высокоинтегрированный электропривод 8-в-1, созданный специально для электромобилей, с тепловым насосом для стабильности на морозе.', en: 'Purpose-built smart EV architecture featuring highly integrated 8-in-1 powertrain, ultra-efficient heat pumps, and rigid structural safety.' },
};

export const FAQS = [
  {
    question: {
      uz: 'BYD avtomobillariga kafolat muddati qancha?',
      ru: 'Каков гарантийный срок на автомобили BYD?',
      en: 'What is the warranty period for BYD vehicles?',
    },
    answer: {
      uz: 'Rasmiy dilerlardan xarid qilingan avtomobillarga 5 yil yoki 150 000 km, batareyaga esa 8 yil kafolat beriladi.',
      ru: 'На автомобили, приобретенные у официальных дилеров, предоставляется гарантия 5 лет или 150 000 км, а на батарею — 8 лет.',
      en: 'Vehicles purchased from official dealers carry a 5-year or 150,000 km manufacturer warranty, with an 8-year warranty on the battery.',
    },
  },
  {
    question: {
      uz: 'DM-i gibridini qanday quvvatlash mumkin?',
      ru: 'Как заряжать гибриды серии DM-i?',
      en: 'How do you charge DM-i hybrids?',
    },
    answer: {
      uz: 'DM-i gibridlarini uy rozetkasidan (220V), maxsus devoriy quvvatlagichdan (Wallbox) yoki tezkor shahar quvvatlash stansiyalaridan quvvatlash mumkin. Agar batareya tamom bosa ham, avtomobil benzin dvigateli hisobiga harakatlanishda davom etadi.',
      ru: 'Гибриды DM-i можно заряжать от домашней розетки (220В), настенного зарядного устройства (Wallbox) или городских быстрых станций. При разряде батареи автомобиль едет за счет бензинового генератора.',
      en: 'DM-i hybrids can be charged via a standard 220V home outlet, AC Wallbox chargers, or DC fast charging stations. If the battery is depleted, the car continues running seamlessly via its high-efficiency gasoline engine.',
    },
  },
  {
    question: {
      uz: 'Oʻzbekistonda ehtiyot qismlari va servis bilan muammolar bormi?',
      ru: 'Есть ли проблемы с запчастями и сервисом в Узбекистане?',
      en: 'Are spare parts and service centers fully available in Uzbekistan?',
    },
    answer: {
      uz: 'Yoʻq. Barcha rasmiy dilerlik markazlarida sertifikatlangan servis va original ehtiyot qismlari ombori mavjud. Har bir usta maxsus BYD zavodi treninglaridan oʻtgan.',
      ru: 'Нет. Все официальные дилерские центры оснащены сертифицированным сервисом и складом оригинальных запчастей. Мастера прошли обучение на заводах BYD.',
      en: 'No. All official dealerships have fully equipped certified service departments and fully stocked genuine spare parts warehouses. All technicians are directly trained by BYD factories.',
    },
  },
];
