import React, {useEffect} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './ModalWindow.scss'
import {hideRequestModal} from '../../Redux/actions/modal'
import {RootState} from "../../Redux";
import {connect} from "react-redux";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputString from "../InputString/InputString";
import InputMasked from "../InputMasked/InputMasked";

interface ModalWindowProps {
    title?: string
    isActive: boolean
    hideRequestModal: () => void
}

const name: string = ""
const phone: number = 0

const ModalWindow = (props: ModalWindowProps) => {
    useEffect(() => {
        bodyBlock()
    }, [])

    const bodyBlock = (): void => {
        document.querySelector('body')?.classList.add('modal-open')
    }

    const bodyUnBlock = (): void => {
        document.querySelector('body')?.classList.remove('modal-open')
    }

    const closeButtonHandler = (): void => {
        bodyUnBlock()
        props.hideRequestModal()
    }

    return (
        <React.Fragment>
            {props.isActive ? (<div className="ModalWindow">
                <div className="ModalWindow__container">
                    <Container fluid className="ModalWindow__header p-0">
                        <Row className="m-0 h-100">
                            <Col xs={10} className="ModalWindow__headerTitle d-flex align-items-center">
                                {props.title && props.title}
                            </Col>
                            <Col xs={2} className="ModalWindow__close d-flex justify-content-end align-items-center">
                                <Icon.XCircleFill width={47} height={47} fill={`#3B3B3B`}
                                                  onClick={() => closeButtonHandler()}/>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="ModalWindow__body">
                        <h4>Оставьте заявку</h4>
                        <p>Мы свяжемся с вами и ответим на все ваши вопросы</p>
                        <InputString placeholder={"Ваше имя"} value={name} controlChangeHandler={() => console.log(222)}/>
                        <InputMasked type={"phone"} value={phone} controlChangeHandler={() => console.log(222)}/>
                        <ButtonComponent onClick={() => console.log(111)}> Отправить</ButtonComponent>
                        <p>Оставляя заявку, вы соглашаетесь с политикой конфиденциальности</p>
                </Container>
            </div>
                </div>) : null}

                </React.Fragment>

                )
            }

            const mapDispatchToProps = {
            hideRequestModal
        }

            const mapStateToProps = (state: RootState) => {
            const isActive: boolean = state.modal.modalRequestForm.isActive
            return {
            isActive,
        }
        }

            export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow)

