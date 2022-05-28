import axios from 'axios'
import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Config } from '../../../../../Config/Config'
import FormDataInterface from '../../../../../Interfaces/FormDataInterface'
import { RootState } from '../../../../../Redux'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import LoaderHorizontal from '../../../../../SharedComponents/LoaderHorizontal/LoaderHorizontal'
import { setSuccessToast, setErrorToast } from '../../../../../Redux/actions/toast'
import './Block5.scss'

interface Block5Props {
  setSuccessToast: (message: string) => void
  setErrorToast: (message: string) => void
}

const Block5 = (props: Block5Props) => {
  const minLength: number = 3
  const [loader, setLoader] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataInterface>({})

  const showToast = (error: boolean, message: string): void => {
    error ? props.setErrorToast(message) : props.setSuccessToast(message)
  }

  const sendButtonClick = (data: FormDataInterface) => {
    setLoader(true)

    const mailSettings = {
      ...Config.mailSettings,
      userName: data.name,
      userPhone: data.phoneNumber,
      siteUrl: Config.url,
      userEmail: data.email,
    }

    axios
      .post(mailSettings.apiPath, mailSettings)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          showToast(false, 'Заявка успешно отправлена. Мы с вами свяжемся в ближайшее время.')
        } else {
          console.log('Ошибка отправки заявки.')
          showToast(true, 'Ошибка отправки заявки.')
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoader(false))
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
            <AnimationOnScroll animateOnce={true} offset={200} delay={200} animateIn="animate__fadeIn">
              <h1>Не откладывай будущее на завтра</h1>
              <p>Заполните форму обратной связи, и с вами свяжутся в течение 15 минут</p>
              <p className="Block5__miniTitle">Остались вопросы?</p>
              <div className="Block5__button d-none d-md-block">
                <ButtonComponent onClick={() => showToast(false, 'Переход на whatsapp!')}>
                  <div className="Block5__buttonCont d-flex justify-content-between align-items-baseline">
                    <div className="Block5__buttonTitle">Либо напишите ваш вопрос на WhatsApp</div>
                    <div className="Block5__buttonImg">
                      <img src="/img/wa.svg" alt="" />
                    </div>
                  </div>
                </ButtonComponent>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col xs={12} md={5} className="Block5__Col Right">
            <AnimationOnScroll animateOnce={true} offset={100} delay={200} animateIn="animate__slideInUp">
              <div className="Block5__inputCont">
                <input
                  type="text"
                  className="Block5__input"
                  aria-label="Ваше имя"
                  placeholder="Ваше имя"
                  {...register('name', {
                    required: { value: true, message: 'Обязательное поле для заполнения' },
                    minLength: {
                      value: minLength,
                      message: 'Недостаточное кол-во символов. Минимальное: ' + minLength,
                    },
                    pattern: {
                      value: /^[\s-а-яА-Я]+$/i,
                      message: 'Недопустимые символы. Доступны только кириллические',
                    },
                  })}
                />

                {errors.name && <small className="Block5__errorLine">{errors.name.message}</small>}
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} offset={100} delay={400} animateIn="animate__slideInUp">
              <div className="Block5__inputCont">
                <input
                  type="email"
                  className="Block5__input"
                  aria-label="Почта"
                  placeholder="Почта"
                  {...register('email', {
                    required: { value: true, message: 'Обязательное поле для заполнения' },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                      message: 'Введенный email некорректен',
                    },
                  })}
                />

                {errors.email && <small className="Block5__errorLine">{errors.email.message}</small>}
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} offset={100} delay={600} animateIn="animate__slideInUp">
              <div className="Block5__inputCont">
                <input
                  type="tel"
                  className="Block5__input"
                  aria-label="Номер телефона"
                  placeholder="Номер телефона"
                  {...register('phoneNumber', {
                    required: { value: true, message: 'Обязательное поле для заполнения' },
                    pattern: {
                      value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: 'Недопустимые символы. Доступны только кириллические',
                    },
                  })}
                />

                {errors.phoneNumber && <small className="Block5__errorLine">{errors.phoneNumber.message}</small>}
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} offset={100} delay={800} animateIn="animate__slideInUp">
              <div className="Block5__inputCont">
                <input
                  type="text"
                  name="comment"
                  className="Block5__input"
                  aria-label="Комментарий"
                  placeholder="Комментарий"
                />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} offset={100} delay={1000} animateIn="animate__slideInUp">
              <div className="Block5__buttonCont2">
                {loader ? (
                  <LoaderHorizontal />
                ) : (
                  <ButtonComponent onClick={handleSubmit((data) => sendButtonClick(data))}>
                    Отправить заявку
                  </ButtonComponent>
                )}
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} offset={100} delay={1200} animateIn="animate__fadeIn">
              <div className="Block5__subtitle">Отправляя заявку, вы соглашаетесь с политикой конфиденциальности</div>
            </AnimationOnScroll>

            <div className="Block5__button d-block d-md-none">
              <ButtonComponent onClick={() => showToast(false, 'Переход на whatsapp!')}>
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

const mapDispatchToProps = {
  setSuccessToast,
  setErrorToast,
}

const mapStateToProps = (state: RootState) => {
  const toast = state.toast
  return {
    toast,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block5)
