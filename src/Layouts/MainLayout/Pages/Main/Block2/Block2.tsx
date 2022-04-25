import React from 'react'
import { Container } from 'react-bootstrap'
import ButtonComponent from '../../../../../SharedComponents/ButtonComponent/ButtonComponent'
import './Block2.scss'

interface Block2Props {}

const Block2 = (props: Block2Props) => {
  const onClick = () => {
    console.log('onClick')
  }

  return (
    <Container fluid className="Block2 p-0">
      <h2>Block2</h2>
    </Container>
  )
}

export default Block2
