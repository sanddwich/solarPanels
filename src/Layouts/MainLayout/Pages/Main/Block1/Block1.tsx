import React from "react"
import { Container } from "react-bootstrap"
import './Block1.scss'

interface Block1Props {}

const Block1 = (props: Block1Props) => {
  return (
    <Container className="Block1">
      <h1>Block1</h1>
    </Container>
  )
}

export default Block1