import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import Card4 from '../../../../../SharedComponents/Card4/Card4'
import './Block4.scss'

interface Block4Props {}

const Block4 = (props: Block4Props) => {
  let counter = 1

  return (
    <Container fluid className="Block4">
      <Container className="Block4__Cont">
        <Row className="Block4__Row1">
          <Col xs={12} md={6} className="Block4__card">
            <h3>Ответственный подход на каждом этапе</h3>
          </Col>

          {Config.card4List.map((card, index) => {
            counter++

            return (
              <Col key={index} xs={12} md={6} className="Block4__card">
                <Card4 card={card} />
                {counter == 2 && <Row><h2>counter</h2></Row> && (counter = 0)}
              </Col>
            )
          })}
        </Row>
      </Container>
    </Container>
  )
}

export default Block4
