import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './Block8.scss'
import { Placemark, YMaps, Map } from 'react-yandex-maps'
import { Config } from '../../../../../Config/Config'

const Block8 = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Container fluid className="Block8 ">
      <Container>
        <h2>Приезжайте в офис или свяжитесь с нами</h2>
        <div className="row Block8__contacts">
          <div className="col-xl-4 col-md-4 col-12 Block8__contact">
            <div className="Block8__contact-label">Адрес</div>
            <div className="Block8__contact-text">Астрахань, ул. Ереванская, 1б, 2 этаж</div>
          </div>
          <div className="col-xl-4 col-md-4 col-12 Block8__contact">
            <div className="Block8__contact-label">Почта</div>
            <div className="Block8__contact-text">info@newgeneration.ru</div>
          </div>
          <div className="col-xl-4 col-md-4 col-12 Block8__contact">
            <div className="Block8__contact-label">Телефон</div>
            <div>
              <a href={Config.phoneNumber}>{Config.phone}</a>
            </div>
          </div>
        </div>

        <div className="Block8__map-container">
          <YMaps>
            <Map
              className="Block8__map"
              onLoad={() => setIsLoading(false)}
              defaultState={{ center: [46.373548, 48.083012], zoom: 17 }}
            >
              <Placemark geometry={[46.373592, 48.082599]} />
            </Map>
          </YMaps>
        </div>
      </Container>
    </Container>
  )
}

export default Block8
