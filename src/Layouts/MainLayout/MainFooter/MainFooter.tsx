import React from 'react'
import { Container } from 'react-bootstrap'
import './MainFooter.scss'
import ButtonComponent from '../../../SharedComponents/ButtonComponent/ButtonComponent'
import { setMobileMenuModal, showRequestModal } from '../../../Redux/actions/modal'
import { RootState } from '../../../Redux'
import { connect } from 'react-redux'
import { scroller } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { NavLink } from 'react-router-dom'
import { Config } from '../../../Config/Config'

interface MainFooterProps {
  setMobileMenuModal: (isActive: boolean) => void
  showRequestModal: () => void
}

const MainFooter = (props: MainFooterProps) => {
  const whatsappChat = () => {
    window.open(Config.whatsapp, '_blank')
  }
  const telegramChat = () => {
    window.open(Config.telegram, '_blank')
  }
  const scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1500,
      delay: 100,
      offset,
    })
  }

  return (
    <Container fluid className="MainFooter">
      <Container>
        <div className="MainFooter__row1">
          <AnimationOnScroll animateOnce={true} offset={0} delay={1500} animateIn="animate__fadeIn">
            <NavLink to={'/'}>
              <div className="MainFooter__Logo">
                <div className="MainFooter__LogoText">New Generation</div>
              </div>
            </NavLink>
          </AnimationOnScroll>
          <div className="MainFooter__navigation">
            <div className="MainFooter__navigationEl hvr-underline-from-left" onClick={() => scrollTo('Block2', 0)}>
              Типы систем
            </div>
            <div className="MainFooter__navigationEl hvr-underline-from-left" onClick={() => scrollTo('Block4', 0)}>
              Этапы
            </div>
            <div className="MainFooter__navigationEl hvr-underline-from-left" onClick={() => scrollTo('Block6', 0)}>
              Выполненые проекты
            </div>
            <div className="MainFooter__navigationEl hvr-underline-from-left" onClick={() => scrollTo('Block7', 0)}>
              Отзывы
            </div>
            <div className="MainFooter__navigationEl hvr-underline-from-left" onClick={() => scrollTo('Block8', 0)}>
              Контакты
            </div>
          </div>

          <div className="MainFooter__callButton">
            <ButtonComponent onClick={props.showRequestModal}>Заказать звонок</ButtonComponent>
          </div>
        </div>

        <div className="MainFooter__row2">
          <div className="MainFooter__politics">
            <a href="./politic.pdf" target={`_blank`}>
              Политика конфиденциальности
            </a>
          </div>
          <div className="MainFooter__socialBlock">
            <img onClick={telegramChat} className="hvr-shrink" src="/img/tg.svg" alt="telegram" />
            {/* <a
                            href="https://instagram.com/new_generation_ru"><img className="hvr-shrink" src="/img/inst.svg" alt="instagram"/></a> */}
            <img onClick={whatsappChat} className="hvr-shrink" src="/img/wa.svg" alt="whatsapp" />
          </div>
          <div className="MainFooter__copyright">
            Сайт разработали – <a href="https://deedesign.ru/">DEEDESIGN</a>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter)
