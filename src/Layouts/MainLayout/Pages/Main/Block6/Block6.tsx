import React from 'react'
import {Container} from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block6.scss'
import {Swiper, SwiperSlide} from 'swiper/react';

interface Block6Props {
}

const Block6 = (props: Block6Props) => {
    const onClick = () => {
        console.log('onClick')
    }

    return (
        <Container fluid className="Block6 ">
            <Container>
                <h2>Выполненные проекты</h2>

                <div>Клиенты доверяют нам выполнение любых, самых трудных задач</div>
                <div className="row">
                    <div className="col-4">
                        <div className="Block6__card">
                            <div className="Block6__card-img">
                                <img src="/img/solar-panels-field 1.jpg" alt="project-image"/>
                            </div>
                            <div className="Block6__card-text">
                                <h5>Название проекта</h5>
                                <p>Высокий уровень вовлечения представителей целевой аудитории является доказательством
                                    простого факта: экономическое развитие, а также свежий взгляд на привычные вещи -
                                    безусловно открывает новые горизонты для вывода активов!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="Block6__card">
                            <div className="Block6__card-img">
                                <img src="/img/solar-panels-field 1.jpg" alt="project-image"/>
                            </div>
                            <div className="Block6__card-text">
                                <h5>Название проекта</h5>
                                <p>Высокий уровень вовлечения представителей целевой аудитории является доказательством
                                    простого факта: экономическое развитие, а также свежий взгляд на привычные вещи -
                                    безусловно открывает новые горизонты для вывода активов!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="Block6__card">
                            <div className="Block6__card-img">
                                <img src="/img/solar-panels-field 1.jpg" alt="project-image"/>
                            </div>
                            <div className="Block6__card-text">
                                <h5>Название проекта</h5>
                                <p>Высокий уровень вовлечения представителей целевой аудитории является доказательством
                                    простого факта: экономическое развитие, а также свежий взгляд на привычные вещи -
                                    безусловно открывает новые горизонты для вывода активов!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="Block6__card">
                            <div className="Block6__card-img">
                                <img src="/img/solar-panels-field 1.jpg" alt="project-image"/>
                            </div>
                            <div className="Block6__card-text">
                                <h5>Название проекта</h5>
                                <p>Высокий уровень вовлечения представителей целевой аудитории является доказательством
                                    простого факта: экономическое развитие, а также свежий взгляд на привычные вещи -
                                    безусловно открывает новые горизонты для вывода активов!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="Block6__card">
                            <div className="Block6__card-img">
                                <img src="/img/solar-panels-field 1.jpg" alt="project-image"/>
                            </div>
                            <div className="Block6__card-text">
                                <h5>Название проекта</h5>
                                <p>Высокий уровень вовлечения представителей целевой аудитории является доказательством
                                    простого факта: экономическое развитие, а также свежий взгляд на привычные вещи -
                                    безусловно открывает новые горизонты для вывода активов!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="Block6__card">
                            <div className="Block6__card-img">
                                <img src="/img/solar-panels-field 1.jpg" alt="project-image"/>
                            </div>
                            <div className="Block6__card-text">
                                <h5>Название проекта</h5>
                                <p>Высокий уровень вовлечения представителей целевой аудитории является доказательством
                                    простого факта: экономическое развитие, а также свежий взгляд на привычные вещи -
                                    безусловно открывает новые горизонты для вывода активов!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Block6
