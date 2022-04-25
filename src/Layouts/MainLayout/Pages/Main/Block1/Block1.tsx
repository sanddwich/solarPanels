import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block1.scss'

interface Block1Props {}

const Block1 = (props: Block1Props) => {
  const onClick = () => {
    console.log("onClick")
  }

  return (
    <Container fluid className="Block1 p-0">
      <div className="d-flex flex-wrap">
        <ButtonComponent onClick={onClick}>
          <div className="ButtonComponent__default">Связаться</div>
        </ButtonComponent>
      </div>
    </Container>
  )
}

export default Block1
