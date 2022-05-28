import Card4Inteface from '../Interfaces/Card4Inteface'
import CardInterface from '../Interfaces/CardInterface'
import MailSettingsInterface from '../Interfaces/MailSettingsInterface'

interface ConfigInterface {
  url: string
  mailSettings: MailSettingsInterface
  cardList: CardInterface[]
  miniCardList: CardInterface[]
  card4List: Card4Inteface[]
}

export const Config: ConfigInterface = {
  // url: 'http://localhost:3000/',
  url: 'https://newg30.ru/',
  mailSettings: {
    apiPath: '/api/index.php',
    senderMail: 'info@newg30.ru',
    senderMailInfo: 'newg30 Info',
    senderMailServer: 'ssl://mail.hostland.ru',
    userName: '',
    userPhone: '',
    userEmail: '',
    recipientMail: 'bck-dkiselev@yandex.ru',
    userComment: ''
    // recipientMail: 'airmix_pods@mail.ru',
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
}
