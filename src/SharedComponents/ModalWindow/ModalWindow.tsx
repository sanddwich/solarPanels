import React, {useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './ModalWindow.scss'
import {hideRequestModal} from '../../Redux/actions/modal'
import {RootState} from "../../Redux";
import {connect} from "react-redux";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputString from "../InputString/InputString";
import InputMasked from "../InputMasked/InputMasked";
import FormDataInterface from "../../Interfaces/FormDataInterface";
import {Config} from "../../Config/Config";
import axios from "axios";
import {setErrorToast, setSuccessToast} from "../../Redux/actions/toast";
import {useForm} from "react-hook-form";
import IModalWindowData from "../../Interfaces/IModalWindowData";
import LoaderHorizontal from "../LoaderHorizontal/LoaderHorizontal";

interface ModalWindowProps {
    title?: string
    isActive: boolean
    hideRequestModal: () => void
    setSuccessToast: (message: string) => void
    setErrorToast: (message: string) => void
}


const ModalWindow = (props: ModalWindowProps) => {

    useEffect(() => {
        bodyBlock()
    }, [])
    const [loader, setLoader] = useState<boolean>(false)

    const [name, setUserName] = useState<string>('')
    const [userPhone, setUserPhone] = useState<string>('')
    const [nameError, setNameError] = useState<boolean>(false)
    const [phoneError, setPhoneError] = useState<boolean>(false)

    const bodyBlock = (): void => {
        document.querySelector('body')?.classList.add('modal-open')
    }

    const bodyUnBlock = (): void => {
        document.querySelector('body')?.classList.remove('modal-open')
    }

    const phoneChangeHandle = (phone: string) => {
        setPhoneError(false)
        setUserPhone(phone)
    }
    const nameChangeHandle = (name: string) => {
        setPhoneError(false)
        setUserName(name)
    }

    const closeButtonHandler = (): void => {
        bodyUnBlock()
        props.hideRequestModal()
    }

    const showToast = (error: boolean, message: string): void => {
        error ? props.setErrorToast(message) : props.setSuccessToast(message)
    }

    const sendButtonClick = (data: IModalWindowData) => {


        const mailSettings = {
            ...Config.mailSettings,
            userName: data.name,
            userPhone: data.phoneNumber,
            siteUrl: Config.url,
        }
        console.log(userPhone.length)
        if (name.trim().length === 0) {
            setNameError(true)
        }
        if (userPhone.replaceAll('_','').length < 16) {
            setPhoneError(true)
        }
        if (name.trim().length > 0 && userPhone.replaceAll('_','').length === 16) {
            setLoader(true)
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
                        <InputString placeholder={"Ваше имя"} value={name}
                                     controlChangeHandler={(name) => nameChangeHandle(name)}
                        />
                        {nameError && <small style={{color: 'red'}}>Введите ваше имя</small>}
                        <InputMasked type={"phone"} value={userPhone}
                                     controlChangeHandler={(userPhone) => phoneChangeHandle(userPhone)}

                        />
                        {phoneError && <small style={{color: 'red'}}>Введите корректный номер телефона</small>}

                        {loader ? (
                            <LoaderHorizontal/>
                        ) : (
                            <ButtonComponent
                                onClick={() => sendButtonClick({name, phoneNumber: userPhone})}> Отправить</ButtonComponent>
                        )}
                        <p>Оставляя заявку, вы соглашаетесь с политикой конфиденциальности</p>
                    </Container>
                </div>
            </div>) : null}

        </React.Fragment>

    )
}

const mapDispatchToProps = {
    hideRequestModal,
    setSuccessToast,
    setErrorToast,
}

const mapStateToProps = (state: RootState) => {
    const isActive: boolean = state.modal.modalRequestForm.isActive
    const toast = state.toast
    return {
        isActive,
        toast
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow)

