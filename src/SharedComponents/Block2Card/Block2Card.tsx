import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardInterface from '../../Interfaces/CardInterface'
import './Block2Card.scss'

interface Block2CardProps {
  card: CardInterface
}

const Block2Card = (props: Block2CardProps) => {
  const onClick = () => {
    // console.log('onClick')
  }

  return (
    <Container fluid className="Block2Card p-0" >
      {!!props.card.img && !!props.card.imgMob && (
        <Row className="Block2Card__img">
          <img
            className="img-fluid d-none d-sm-block hvr-grow"
            src={props.card.img}
            alt={!!props.card.title ? props.card.title : ''}
          />
          <img
            className="img-fluid d-block d-sm-none hvr-grow"
            src={props.card.imgMob}
            alt={!!props.card.title ? props.card.title : ''}
          />
          <div className="Block2Card__title">
            <h2>{props.card.title}</h2>
          </div>
        </Row>
      )}

      <Row className="Block2Card__subtitles">
        {props.card.subtitles.map((subtitle, index) => {
          return (
            <div key={index} className="Block2Card__subtitle d-flex justify-content-between">
              <div className="Block2Card__subtitleIcon">
                <img src={subtitle.icon} alt={subtitle.text} />
              </div>
              <div className="Block2Card__subtitleText">{subtitle.text}</div>
            </div>
          )
        })}
      </Row>
    </Container>
  )
}

export default Block2Card
