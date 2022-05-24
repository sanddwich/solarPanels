import React from 'react'
import {Container} from 'react-bootstrap'
import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'
import './Main.scss'
import Block7 from './Block7/Block7'
import Block6 from './Block6/Block6'
import Block3 from './Block3/Block3'
import Block4 from './Block4/Block4'
import ModalWindow from "../../../../SharedComponents/ModalWindow/ModalWindow";
import Block5 from "./Block5/Block5";

interface MainProps {
}

interface MainState {
}

class Main extends React.Component<MainProps, MainState> {
    render() {
        return (
            <Container fluid className="Main p-0">
                <Block1/>
                <Block2/>
                <Block3/>
                <Block4/>
                <Block5/>
                <Block6/>
                <Block7/>
                <ModalWindow/>
            </Container>
        )
    }
}

export default Main
