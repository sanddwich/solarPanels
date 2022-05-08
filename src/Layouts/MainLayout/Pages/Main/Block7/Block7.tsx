import React from 'react'
import {Container} from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block7.scss'
import {Swiper, SwiperSlide} from 'swiper/react';

interface Block7Props {
}

const Block7 = (props: Block7Props) => {
    const onClick = () => {
        console.log('onClick')
    }

    return (
        <Container fluid className="Block7 p-0">
            <Container>
                <h1>Отзывы</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </Container>
        </Container>
    )
}

export default Block7
