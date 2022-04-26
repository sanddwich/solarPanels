import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../../../../Redux'
import { setMobileMenuModal } from '../../../../../Redux/actions/modal'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block1.scss'

interface Block1Props {  
  setMobileMenuModal: (isActive: boolean) => void
}

const Block1 = (props: Block1Props) => {
  const callOrder = () => {
    console.log('callOrder')
  }

  return (
    <Container
      fluid
      className="Block1 p-0"
      style={{
        background: `url(/img/back.jpg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container className="Block1__block">
        <div className="Block1__Row1 d-flex justify-content-between align-items-baseline">
          <div className="Block1__Logo">
            <div className="Block1__LogoText">New Generation</div>
            <div className="Block1__LogoLine"></div>
          </div>
          <div className="Block1__navigation d-none d-lg-flex flex-wrap justify-content-center">
            <div className="Block1__navigationEl">Типы систем</div>
            <div className="Block1__navigationEl">Этапы</div>
            <div className="Block1__navigationEl">Выполненые проекты</div>
            <div className="Block1__navigationEl">Отзывы</div>
            <div className="Block1__navigationEl">Контакты</div>
          </div>
          <div className="Block1__callButton d-none d-sm-block">
            <ButtonComponent onClick={callOrder}>
              <div>Заказать звонок</div>
            </ButtonComponent>
          </div>
          <div className="Block1__burger d-block d-sm-none" onClick={() => props.setMobileMenuModal(true)}>
            <img src="/img/burger.svg" alt="Меню" />
          </div>
        </div>

        <Row className="Block1__titleRow d-flex justify-content-center">
          <Col xs={12} xxl={9} className="Block1__titleCol">
            <div className="Block1__title">Солнечные электростанции для дома и бизнеса</div>
          </Col>
        </Row>

        <div className="Block1__subtitle">Шагни в будущее вместе с нами</div>

        <div className="Block1__buttonCont d-flex justify-content-start justify-content-sm-center">
          <ButtonComponent onClick={callOrder}>Связаться</ButtonComponent>
        </div>
      </Container>

      {/* <div className="d-flex flex-wrap">
        <ButtonComponent onClick={onClick}>
          <div>Связаться</div>
        </ButtonComponent>
      </div> */}
    </Container>
  )
}

const mapDispatchToProps = {
  setMobileMenuModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block1)