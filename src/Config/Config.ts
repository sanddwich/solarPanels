import CardInterface from '../Interfaces/CardInterface'

interface ConfigInterface {
  cardList: CardInterface[]
}

export const Config: ConfigInterface = {
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
}
