import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block5.scss'

const Block5 = () => {
  const onClick = () => {
    console.log('Block5__button')
  }

  const onSendClick = () => {
    console.log('onSendClick')
  }

  return (
    <Container
      fluid
      className="Block5"
      style={{
        background: `url(/img/5_back.jpg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container className="Block5__Cont">
        <Row className="Block5__Row">
          <Col xs={12} md={7} className="Block5__Col Left">
            <h1>Не откладывай будущее на завтра</h1>
            <p>Заполните форму обратной связи, и с вами свяжутся в течение 15 минут</p>
            <p className="Block5__miniTitle">Остались вопросы?</p>
            <div className="Block5__button d-none d-md-block">
              <ButtonComponent onClick={onClick}>
                <div className="Block5__buttonCont d-flex justify-content-between align-items-baseline">
                  <div className="Block5__buttonTitle">Либо напишите ваш вопрос на WhatsApp</div>
                  <div className="Block5__buttonImg">
                    <img src="/img/wa.svg" alt="" />
                  </div>
                </div>
              </ButtonComponent>
            </div>
          </Col>
          <Col xs={12} md={5} className="Block5__Col Right">
            <div className="Block5__inputCont">
              <input type="text" name="name" className="Block5__input" aria-label="Ваше имя" placeholder="Ваше имя" />
            </div>
            <div className="Block5__inputCont">
              <input type="email" name="email" className="Block5__input" aria-label="Почта" placeholder="Почта" />
            </div>
            <div className="Block5__inputCont">
              <input
                type="tel"
                name="phone"
                className="Block5__input"
                aria-label="Номер телефона"
                placeholder="Номер телефона"
              />
            </div>
            <div className="Block5__inputCont">
              <input
                type="text"
                name="comment"
                className="Block5__input"
                aria-label="Комментарий"
                placeholder="Комментарий"
              />
            </div>
            <div className="Block5__buttonCont2">
              <ButtonComponent onClick={onSendClick}>Отправить заявку</ButtonComponent>
            </div>
            <div className="Block5__subtitle">Отправляя заявку, вы соглашаетесь с политикой конфиденциальности</div>

            <div className="Block5__button d-block d-md-none">
              <ButtonComponent onClick={onClick}>
                <div className="Block5__buttonCont d-flex justify-content-between align-items-baseline">
                  <div className="Block5__buttonTitle">Либо напишите ваш вопрос на WhatsApp</div>
                  <div className="Block5__buttonImg">
                    <img src="/img/wa.svg" alt="" />
                  </div>
                </div>
              </ButtonComponent>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Block5
