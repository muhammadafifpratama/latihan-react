import React, { Component } from "react"
import Axios from "axios"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class Home extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        Axios.get("http://localhost:2000/users")
        .then((res) => {
            this.setState({ data: res.data })
            console.log(this.state.data)
        })
        .catch((err) => {

        })
    }

    contoh = () => {

    }

    renderUSerData = () => {
        return this.state.data.map((val) => {
            return (
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>{val.first_name}</CardTitle>
                            <CardText>{val.last_name}</CardText>
                            <Button>{val.email}</Button>
                        </Card>
                    </Col>
                </Row>
            )
        })
    }

    render() {
        return (
            <div>
                ini Home
                <button onClick={this.contoh}> click me</button>
                {this.renderUSerData()}
            </div >
        )
    }
}

export default Home