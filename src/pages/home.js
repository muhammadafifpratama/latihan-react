import React, { Component } from "react"
import Axios from "axios"
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Table, Form, Button } from 'reactstrap';

class Home extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        Axios.get("http://localhost:2000/users")
            .then((res) => {
                this.setState({ data: res.data })
                console.log(this.state.data)
                console.log(this.res.data)
            })
            .catch((err) => {

            })
    }

    componentDidUpdate() {
        Axios.get("http://localhost:2000/users")
    }

    contoh = () => {

    }

    renderUSerData = () => {
        return this.state.data.map((val) => {
            return (

                <tr>
                    <th scope="row">{val.id}</th>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                </tr>
                // <Row>
                //     <Col sm="6">
                //         <Card body>
                //             <CardTitle>{val.first_name}</CardTitle>
                //             <CardText>{val.last_name}</CardText>
                //             <Button>{val.email}</Button>
                //         </Card>
                //     </Col>
                // </Row>
            )
        })
    }

    submitData = () => {
        var namaDepan = this.refs.first_name.value
        var namaBelakang = this.refs.last_name.value
        var email = this.refs.email.value
        console.log(namaDepan)
        console.log(namaBelakang)
        console.log(email)
        Axios.post('http://localhost:2000/users', {
            first_name: namaDepan,
            last_name: namaBelakang,
            email: email
        })
            .then((res) => {
                Axios.get("http://localhost:2000/users")
                    .then((res) => {
                        this.setState({ data: res.data })
                    })
                console.log(this.state.data)
            })
            .catch((err) => {

            })
    }


    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUSerData()}
                    </tbody>
                </Table>
                {/* <button onClick={this.contoh}> click me</button> */}
                <Form>
                    <p>First Name</p>
                    <input type="text" name="first-name" ref="first_name" placeholder="First Name" />

                    <p>Last Name</p>
                    <input type="text" name="last-name" ref="last_name" placeholder="Last Name" />

                    <p>Email</p>
                    <input type="text" name="email" ref="email" placeholder="Email" />
                    <Button color='primary' onClick={this.submitData}>
                        Submit
                  </Button>
                </Form>

            </div >
        )
    }
}

export default Home