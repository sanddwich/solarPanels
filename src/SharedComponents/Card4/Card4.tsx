import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Col, Container, Row } from 'react-bootstrap'
import Card4Inteface from '../../Interfaces/Card4Inteface'
import './Card4.scss'

interface Card4Props {
  card: Card4Inteface
}

const Card4 = (props: Card4Props) => {
  return (
    <Container className="Card4 h-100">
      <AnimationOnScroll animateOnce={true} offset={100} delay={100} animateIn="animate__fadeIn">
        <Row className="Card4__num m-0">{props.card.num}</Row>
        <Row className="Card4__title m-0">{props.card.title}</Row>
        <Row className="Card4__subtitle m-0">
          <Col xs={12} xl={8} className="Card4__Col p-0">
            {props.card.subtitle}
          </Col>
        </Row>
      </AnimationOnScroll>
    </Container>
  )
}

export default Card4
