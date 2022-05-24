import React, {useState} from 'react'
import {Container, Form} from 'react-bootstrap'
import './InputString.scss'

interface InputStringProps {
    type?: 'text' | 'number' | 'password'
    placeholder?: string
    value: string
    controlChangeHandler: (value: string) => void
}

const InputString = (props: InputStringProps) => {
    const [curValue, setCureValue] = useState(props.value)

    const changeHandler = (val: string): void => {
        props.controlChangeHandler(val)
        setCureValue(val)
    }

    return (
        <Container fluid className="InputString">
            <Form.Control
                type={props.type ? props.type : 'text'}
                value={curValue}
                placeholder={props.placeholder}
                onChange={(event) => {
                    changeHandler(event.target.value)
                }}
            />
        </Container>
    )
}

export default InputString
