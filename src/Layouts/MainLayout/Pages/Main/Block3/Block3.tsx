import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import Block2Card from '../../../../../SharedComponents/Block2Card/Block2Card'
import './Block3.scss'

interface Block3Props {}

const Block3 = (props: Block3Props) => {
  return (
    <Container
      fluid
      className="Block3"
      style={{
        background: `url(/img/3-1.jpg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container className="Block3__Cont">
        <Row className="Block3__Row1">
          <Col className="Block3__Col1" xs={12} lg={8}>
            <Container fluid className="Block3__cards p-0">
              <Row className="Block3__cardsRow">
                {Config.miniCardList.map((minicard, index) => {
                  return (
                    <Col className="Block3__cardsCol" key={index} xs={12} lg={6}>
                      <Block2Card card={minicard} />
                    </Col>
                  )
                })}
                <Col className="Block3__Col p-0" xs={12} lg={6}></Col>
              </Row>
            </Container>
          </Col>
          <Col className="Block3__Col1" xs={12} lg={4}></Col>
        </Row>
        <Row className="Block3__bottom d-flex d-sm-none">
          <img className='img-fluid' src="/img/3-1m.png" alt="" />
        </Row>
      </Container>
    </Container>
  )
}

export default Block3
