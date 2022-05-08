import React from 'react'
import {Container} from 'react-bootstrap'
import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'
import './Main.scss'
import Block7 from "./Block7/Block7";
import Block6 from "./Block6/Block6";

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
                <Block6/>
                <Block7/>
            </Container>
        )
    }
}

export default Main
