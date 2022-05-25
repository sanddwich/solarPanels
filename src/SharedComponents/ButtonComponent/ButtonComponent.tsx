import React from 'react'
import './ButtonComponent.scss'

interface ButtonComponentProps {
  children?: React.ReactNode
  onClick: () => void
}

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <div className="ButtonComponent hvr-sweep-to-right" onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default ButtonComponent