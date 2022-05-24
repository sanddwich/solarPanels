import React from 'react'
import { Container } from 'react-bootstrap'
import './MainFooter.scss'
import ButtonComponent from "../../../SharedComponents/ButtonComponent/ButtonComponent";
import {setMobileMenuModal, showRequestModal} from "../../../Redux/actions/modal";
import {RootState} from "../../../Redux";
import {connect} from "react-redux";

interface MainFooterProps {
    setMobileMenuModal: (isActive: boolean) => void
    showRequestModal: () => void
}

const MainFooter = (props: MainFooterProps) => {
  
    return (
      <Container fluid className="MainFooter  p-0">

          <Container>
              <div className="MainFooter__row1">
                  <div className="MainFooter__Logo">
                      <div className="MainFooter__LogoText">New Generation</div>
                  </div>
                  <div className="MainFooter__navigation">
                      <div className="MainFooter__navigationEl">Типы систем</div>
                      <div className="MainFooter__navigationEl">Этапы</div>
                      <div className="MainFooter__navigationEl">Выполненые проекты</div>
                      <div className="MainFooter__navigationEl">Отзывы</div>
                      <div className="MainFooter__navigationEl">Контакты</div>
                  </div>

                  <div className="MainFooter__callButton">
                      <ButtonComponent onClick={props.showRequestModal}>Заказать звонок</ButtonComponent>
                  </div>

              </div>

              <div className="MainFooter__row2">

                  <div className="MainFooter__politics">Политика конфиденциальности</div>
                  <div className="MainFooter__socialBlock">
                      <img src="/img/tg.svg" alt="telegram" />
                      <img src="/img/inst.svg" alt="instagram" />
                      <img src="/img/wa.svg" alt="whatsapp" />
                  </div>
                  <div className="MainFooter__copyright">Сайт разработали – <a href="https://deedesign.ru/">DEEDESIGN</a></div>


              </div>
          </Container>
      </Container>
    )
}

const mapDispatchToProps = {
    setMobileMenuModal, showRequestModal
}

const mapStateToProps = (state: RootState) => {
    const modal = state.modal
    return {
        modal,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter)
