import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Col, Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import Block2Card from '../../../../../SharedComponents/Block2Card/Block2Card'
import './Block2.scss'

interface Block2Props {}

const Block2 = (props: Block2Props) => {
  const onClick = () => {
    console.log('onClick')
  }

  return (
    <Container fluid className="Block2 p-0">
      <Container className="Block2__cont">
        <Row className="Block2__title m-0">
          <h2>Основные варианты солнечных систем</h2>
        </Row>
        <Row className="Block2__cards d-flex justify-content-center">
          {Config.cardList.map((card, index) => {
            return (
              <Col md={6} lg={4} className="Block2__cardCol" key={index}>
                <AnimationOnScroll animateOnce={true} offset={200} delay={index * 200} animateIn="animate__fadeInUp">
                  <Block2Card card={card} />
                </AnimationOnScroll>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Container>
  )
}

export default Block2
