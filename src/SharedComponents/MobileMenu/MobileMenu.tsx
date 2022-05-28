import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RootState } from '../../Redux'
import { ModalState } from '../../Redux/interfaces/interfaces'
import { setMobileMenuModal } from '../../Redux/actions/modal'
import './MobileMenu.scss'
import { connect } from 'react-redux'
import { scroller } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

interface MobileMenuProps {
  setMobileMenuModal: (isActive: boolean) => void
  modal: ModalState
}

interface MobileMenuState {
  messangers: string[]
}

class MobileMenu extends React.Component<MobileMenuProps, MobileMenuState> {
  constructor(props: MobileMenuProps) {
    super(props)
    this.state = {
      messangers: ['https://www.instagram.com/victor__gromov/', 'https://api.whatsapp.com/send?phone=+79171874086'],
    }
  }

  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  closeButton = (): void => {
    this.bodyUnBlock()
    this.props.setMobileMenuModal(false)
  }

  onClickHandler = (element: number): void => {
    if (this.state.messangers[element]) {
      window.open(this.state.messangers[element])
    }
  }

  scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1500,
      delay: 100,
      offset,
    })

    this.closeButton()
  }

  callOrder = () => {
    console.log("callOrder")
  }

  render() {
    this.props.modal.mobileMenu.isActive ? this.bodyBlock() : this.bodyUnBlock()

    return (
      <Container fluid className="MobileMenu p-0 animated animate__fadeInDownBig">
        <div className="MobileMenu__oneRow m-0 d-flex justify-content-between align-items-center">
          <div className="MobileMenu__logo p-2">
            <AnimationOnScroll animateOnce={true} delay={500} offset={0} animateIn="animate__fadeIn">
              New Generation
            </AnimationOnScroll>
          </div>
          <div className="MobileMenu__closeButton">
            <AnimationOnScroll animateOnce={true} delay={500} offset={0} animateIn="animate__fadeIn">
              <img src="/img/exit.svg" alt="" onClick={() => this.closeButton()} />
            </AnimationOnScroll>
          </div>
        </div>
        <Row className="MobileMenu__twoRow m-0">
          <Col className="MobileMenu__menuBlock p-2">
            <ul>
              <li id="MobileMenu__listEl" onClick={() => this.scrollTo('Block2', 0)}>Типы систем</li>
              <li onClick={() => this.scrollTo('Block4', 0)}>Этапы</li>
              <li onClick={() => this.scrollTo('Block6', 0)}>Выполненые проекты</li>
              <li onClick={() => this.scrollTo('Block7', 0)}>Отзывы</li>
              <li onClick={() => this.scrollTo('Block8', 0)}>Контакты</li>
            </ul>
          </Col>
        </Row>
        <div className='MobileMenu__buttonCont d-flex justify-content-start'>
          <ButtonComponent onClick={this.callOrder}>
            <div>Заказать звонок</div>
          </ButtonComponent>
        </div>
      </Container>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu)
