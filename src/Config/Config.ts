import Card4Inteface from '../Interfaces/Card4Inteface'
import CardInterface from '../Interfaces/CardInterface'
import MailSettingsInterface from '../Interfaces/MailSettingsInterface'
import WorkInterface from '../Interfaces/WorkInterface'

interface ConfigInterface {
  url: string
  mailSettings: MailSettingsInterface
  cardList: CardInterface[]
  miniCardList: CardInterface[]
  card4List: Card4Inteface[]
  phone: string
  phoneNumber: string
  telegram: string
  whatsapp: string
  works: WorkInterface[]
  mobWorks: WorkInterface[]
}

export const Config: ConfigInterface = {
  // url: 'http://localhost:3000/',
  url: 'https://newg30.ru/',
  phone: '89377596269',
  phoneNumber: 'tel:89377596269',
  telegram: 'https://t.me/+79377596269',
  whatsapp: 'https://api.whatsapp.com/send?phone=+79377596269',
  mailSettings: {
    apiPath: '/api/index.php',
    senderMail: 'info@newg30.ru',
    senderMailInfo: 'newg30 Info',
    senderMailServer: 'ssl://mail.hostland.ru',
    userName: '',
    userPhone: '',
    userEmail: '',
    // recipientMail: 'bck-dkiselev@yandex.ru',
    recipientMail: 'mail@newg30.ru',
    userComment: '',
  },
  cardList: [
    {
      img: '/img/card1.jpg',
      imgMob: '/img/cardMob1.jpg',
      title: 'Автономная станция',
      subtitles: [
        { icon: '/img/sun.svg', text: 'Генерирует электроэнергию днем' },
        { icon: '/img/dollar.svg', text: 'Окупаемость от 6 месяцев' },
        { icon: '/img/night.svg', text: 'Аккумуляторы дают возможность пользоваться системой в темное время суток' },
      ],
    },
    {
      img: '/img/card2.jpg',
      imgMob: '/img/cardMob2.jpg',
      title: 'Сетевая станция',
      subtitles: [
        { icon: '/img/sun.svg', text: 'Система работает только в дневное время суток' },
        { icon: '/img/moln.svg', text: 'Позволяет экономить на электроэнергии до 80%' },
        { icon: '/img/dollar.svg', text: 'Окупаемость от 3 лет' },
        { icon: '/img/vilka.svg', text: 'Применяется на объектах с электросетью' },
      ],
    },
    {
      img: '/img/card3.jpg',
      imgMob: '/img/cardMob3.jpg',
      title: 'Гибридная станция',
      subtitles: [
        { icon: '/img/dollar.svg', text: 'Гибридная система позволяет экономить электричество до 80%' },
        {
          icon: '/img/circle_moln.svg',
          text: 'Обеспечивает бесперебойным электроснабжением в момент аварийного отключения',
        },
      ],
    },
  ],
  miniCardList: [
    {
      img: null,
      imgMob: null,
      title: null,
      subtitles: [{ icon: '/img/check.svg', text: 'Гарантия от 10 лет' }],
    },
    {
      img: null,
      imgMob: null,
      title: null,
      subtitles: [
        {
          icon: '/img/purse.svg',
          text: 'Окупаемость от 3 лет',
        },
      ],
    },
    {
      img: null,
      imgMob: null,
      title: null,
      subtitles: [
        {
          icon: '/img/rem.svg',
          text: 'Производим монтаж под ключ',
        },
      ],
    },
    {
      img: null,
      imgMob: null,
      title: null,
      subtitles: [
        {
          icon: '/img/messager.svg',
          text: 'На связи 24/7 с нашими клиентами',
        },
      ],
    },
  ],
  card4List: [
    { num: '01', title: 'Консультация', subtitle: 'Определяем задачи под особенности объекта' },
    { num: '02', title: 'Создание проекта', subtitle: 'Производим расчет и разрабатываем систему' },
    { num: '03', title: 'Договор', subtitle: 'Готовим договор и счет на оплату' },
    { num: '04', title: 'Монтаж', subtitle: 'Поставляем оборудование, устанавливаем и запускаем систему' },
    { num: '05', title: 'Сервисное обслуживание', subtitle: 'Профилактика и гарантийное обслуживание' },
  ],
  works: [
    {
      id: 1,
      title: 'Название проекта11',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
    {
      id: 2,
      title: 'Название проекта',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
    {
      id: 3,
      title: 'Название проекта',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
    {
      id: 4,
      title: 'Название проекта',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
    {
      id: 5,
      title: 'Название проекта',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
    {
      id: 6,
      title: 'Название проекта',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
  ],
  mobWorks: [
    {
      id: 1,
      title: 'Название проекта11',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
    {
      id: 2,
      title: 'Название проекта',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
    {
      id: 3,
      title: 'Название проекта',
      body: 'Высокий уровень вовлечения представителей целевой аудитории является доказательством простого факта: экономическое развитие, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для вывода активов!',
      imgPath: '/img/solar-panels-field 1.jpg',
    },
  ]
}
