import React, {useState} from 'react'
import {Container, Form} from 'react-bootstrap'
import ReactInputMask from 'react-input-mask'
import './InputMasked.scss'

interface InputMaskedProps {
    type: 'email' | 'number' | 'password' | 'text' | 'price' | 'phone'
    value: number
    controlChangeHandler: (name: string, value: string) => void
}

interface maskOptions {
    type: 'email' | 'number' | 'password' | 'text' | 'price' | 'phone'
    mask: string
    maskChar: string
    alwaysShowMask: boolean
    formatChars?: any
    permanents?: number[]
}

const InputMasked = (props: InputMaskedProps) => {
    const [inputMaskVariants] = useState<Array<maskOptions>>([
        {
            type: 'phone',
            mask: '+7(999)999-99-99',
            maskChar: '_',
            alwaysShowMask: false,
            formatChars: {
                '9': '[0-9]',
                'a': '[A-Za-z]',
                '*': '[A-Za-z0-9]',
            },
            permanents: [2, 5],
        },

    ])

    const getMask = (): string => {
        const maskVariant = inputMaskVariants.find(maskVariant => maskVariant.type = props.type)?.mask
        if (maskVariant) {
            return maskVariant
        } else {
            return '*'
        }
    }

    return (
        <Container fluid className="InputMasked p-0">
            <Form.Group>
                <ReactInputMask placeholder={"+7(999)999-99-99"} className={"form-control"} mask={getMask()} />
            </Form.Group>
        </Container>
    )
}

export default InputMasked
