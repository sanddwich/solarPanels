import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block1.scss'

interface Block1Props {}

const Block1 = (props: Block1Props) => {
  const onClick = () => {
    console.log('onClick')
  }
  
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
      <Container className="Block1__block p-0">
        <div className="Block1__Row1 d-flex justify-content-between align-items-baseline">
          <div className="Block1__Logo">
            <div className="Block1__LogoText">New Generation</div>
            <div className="Block1__LogoLine"></div>
          </div>
          <div className="Block1__navigation d-flex flex-wrap justify-content-center">
            <div className="Block1__navigationEl">Типы систем</div>
            <div className="Block1__navigationEl">Этапы</div>
            <div className="Block1__navigationEl">Выполненые проекты</div>
            <div className="Block1__navigationEl">Отзывы</div>
            <div className="Block1__navigationEl">Контакты</div>
          </div>
          <div className="Block1__callButton">
            <ButtonComponent onClick={callOrder}>
              <div>Заказать звонок</div>
            </ButtonComponent>
          </div>
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

export default Block1
