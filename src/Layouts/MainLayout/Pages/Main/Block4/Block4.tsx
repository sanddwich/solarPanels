import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import Card4 from '../../../../../SharedComponents/Card4/Card4'
import './Block4.scss'

interface Block4Props {}

const Block4 = (props: Block4Props) => {
  return (
    <Container fluid className="Block4">
      <Container className="Block4__Cont d-none d-md-block">
        <div className="Block4__Row d-flex align-items-center">
          <div className="Block4__card">
            <h3>Ответственный подход на каждом этапе</h3>
          </div>
          <div className="Block4__horLine">
            <div className="Block4__horLineUp none"></div>
            <div className="Block4__horLineDown"></div>
          </div>
          <div className="Block4__card">
            <Card4 card={Config.card4List[0]} />
          </div>
        </div>

        <Row className="Block4__RowLine">
          <Col xs={10} sm={6}>
            <div className="Block4__Up"></div>
            <div className="Block4__Down"></div>
          </Col>
        </Row>
        <div className="Block4__Row d-flex justify-content-between">
          <div className="Block4__card">
            <Card4 card={Config.card4List[1]} />
          </div>
          <div className="Block4__horLine">
            <div className="Block4__horLineUp"></div>
            <div className="Block4__horLineDown"></div>
          </div>
          <div className="Block4__card">
            <Card4 card={Config.card4List[2]} />
          </div>
        </div>

        <Row className="Block4__RowLine">
          <Col xs={10} sm={6}>
            <div className="Block4__Up"></div>
            <div className="Block4__Down"></div>
          </Col>
        </Row>
        <div className="Block4__Row d-flex justify-content-between">
          <div className="Block4__card">
            <Card4 card={Config.card4List[3]} />
          </div>
          <div className="Block4__horLine">
            <div className="Block4__horLineUp"></div>
            <div className="Block4__horLineDown"></div>
          </div>
          <div className="Block4__card">
            <Card4 card={Config.card4List[4]} />
          </div>
        </div>
      </Container>

      <Container className="Block4__ContMob d-block d-md-none">
        <div className="Block4__card" style={{paddingBottom: 40}}>
          <h3>Ответственный подход на каждом этапе</h3>
        </div>

        {Config.card4List.map((card, index) => {
          return (
            <React.Fragment key={index}>
              <Card4 card={card} />
              {index != Config.card4List.length - 1  && (
                <Row className="Block4__RowLine">
                  <Col xs={10} sm={6}>
                    <div className="Block4__Up"></div>
                    <div className="Block4__Down"></div>
                  </Col>
                </Row>
              )}
            </React.Fragment>
          )
        })}
      </Container>
    </Container>
  )
}

export default Block4
