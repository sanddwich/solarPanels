import React from 'react'
import {Container} from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block7.scss'
import {Swiper, SwiperSlide} from 'swiper/react';

const Block7 = () => {
    return (
        <Container fluid className="Block7 ">
            <Container>
                <h2>Отзывы</h2>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div className="Block7__swiper-slide">
                            <div className="slide-header">
                                <h3>Название проекта</h3>
                                <div className="swiper-pagination"/>
                            </div>

                            <div className="d-flex">
                                <div className="slide-image">
                                    <img className={"img-fluid"} src={"/img/solar-panels-house-roof-3d-illustration 3.jpg"} alt=""/>
                                </div>
                                <div className="slide-text">
                                    <h4>Прочитайте отзыв от Николая Семенова:</h4>
                                    <p>
                                        Есть над чем задуматься: некоторые особенности внутренней политики заблокированы
                                        в
                                        рамках своих собственных рациональных ограничений.
                                    </p>
                                    <p>
                                        Банальные, но неопровержимые выводы, а также элементы политического процесса
                                        освещают чрезвычайно интересные особенности картины в целом, однако конкретные
                                        выводы, разумеется, описаны максимально подробно.
                                    </p>
                                    <h4>Что было сделано:</h4>
                                    <p>
                                        <ul>
                                            <li>
                                                Установили солнечные панели.
                                            </li>
                                            <li>
                                                Произвели монтаж под ключ.
                                            </li>
                                            <li>
                                                Рассказали клиенту о дальнейших действиях и принципах работы.
                                            </li>
                                        </ul>
                                    </p>
                                    <ButtonComponent onClick={() => console.log(11)}>Нужен похожий
                                        проект</ButtonComponent>
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Block7__swiper-slide">
                            slide2
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Block7__swiper-slide">
                            slide3
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Block7__swiper-slide">
                            slide4
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Container>
    )
}

export default Block7
