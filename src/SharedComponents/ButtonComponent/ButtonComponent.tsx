import React from 'react'
import './ButtonComponent.scss'

interface ButtonComponentProps {
  children?: React.ReactNode
}

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <div className="ButtonComponent">
      {props.children}
    </div>
  )
}

export default ButtonComponent