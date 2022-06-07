import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block7.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { setMobileMenuModal, showRequestModal } from '../../../../../Redux/actions/modal'
import { RootState } from '../../../../../Redux'
import { connect } from 'react-redux'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

SwiperCore.use([Navigation])

interface Block7Props {
  setMobileMenuModal: (isActive: boolean) => void
  showRequestModal: () => void
}

const Block7 = (props: Block7Props) => {
  return (
    <Container fluid className="Block7">
      <Container>
        <h2>Отзывы</h2>

        <Container fluid className="Block7__swTitle">
          <div className="swiper-controls d-flex justify-content-end">
            <div className="swiper-controls__cont d-none d-lg-flex flex-wrap">
              <div className="swiper-prev swiper-btn" />
              <div className="swiper-next swiper-btn" />
            </div>
          </div>
        </Container>
        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
        >
          <SwiperSlide>
            <div className="Block7__swiper-slide">
              <div className="slide-header">
                <h3>Название проекта</h3>
                <div className="swiper-pagination" />
              </div>

              <Row className="d-flex mt-5">
                <Col xs={12} lg={7} className="slide-image">
                  <img className={'img-fluid'} src={'/img/solar-panels-house-roof-3d-illustration 3.jpg'} alt="" />
                </Col>
                <Col xs={12} lg={5} className="slide-text">
                  <h4>Прочитайте отзыв от Николая Семенова1:</h4>
                  <p>
                    Есть над чем задуматься: некоторые особенности внутренней политики заблокированы в рамках своих
                    собственных рациональных ограничений.
                  </p>
                  <p>
                    Банальные, но неопровержимые выводы, а также элементы политического процесса освещают чрезвычайно
                    интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально
                    подробно.
                  </p>
                  <h4>Что было сделано:</h4>
                  <p>
                    <ul>
                      <li>Установили солнечные панели.</li>
                      <li>Произвели монтаж под ключ.</li>
                      <li>Рассказали клиенту о дальнейших действиях и принципах работы.</li>
                    </ul>
                  </p>
                  <ButtonComponent onClick={props.showRequestModal}>Нужен похожий проект</ButtonComponent>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Block7__swiper-slide">
              <div className="slide-header">
                <h3>Название проекта</h3>
                <div className="swiper-pagination" />
              </div>

              <Row className="d-flex mt-5">
                <Col xs={12} lg={7} className="slide-image">
                  <img className={'img-fluid'} src={'/img/solar-panels-house-roof-3d-illustration 3.jpg'} alt="" />
                </Col>
                <Col xs={12} lg={5} className="slide-text">
                  <h4>Прочитайте отзыв от Николая Семенова:</h4>
                  <p>
                    Есть над чем задуматься: некоторые особенности внутренней политики заблокированы в рамках своих
                    собственных рациональных ограничений.
                  </p>
                  <p>
                    Банальные, но неопровержимые выводы, а также элементы политического процесса освещают чрезвычайно
                    интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально
                    подробно.
                  </p>
                  <h4>Что было сделано:</h4>
                  <p>
                    <ul>
                      <li>Установили солнечные панели.</li>
                      <li>Произвели монтаж под ключ.</li>
                      <li>Рассказали клиенту о дальнейших действиях и принципах работы.</li>
                    </ul>
                  </p>
                  <ButtonComponent onClick={props.showRequestModal}>Нужен похожий проект</ButtonComponent>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Container>
  )
}

const mapDispatchToProps = {
  setMobileMenuModal,
  showRequestModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block7)
