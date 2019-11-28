import React, { Component } from "react"
import Axios from "axios"
import { Table, Form, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardTitle, Row, Col } from 'reactstrap';

class Home extends Component {

    state = {
        data: [],
        selectedid: null
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

    renderCard = () => {
        const Kartu = (props) => {
            // console.log(props)
            return (
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>{props.sembarang}</CardTitle>
                        </Card>
                    </Col>
                </Row>
            );
        };
        return this.state.data.map((val) => {
            return (
                <Kartu sembarang={val.first_name} />
            )
        })
    }

    renderdropdown = () => {
        const Bawah = (props) => {
            return (
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ dropdownOpen: !this.state.dropdownOpen })}>
                    <DropdownToggle caret>
                        Button Dropdown
                  </DropdownToggle>
                    <DropdownMenu>
                        <Bawah sembarang={this.first_name} />
                    </DropdownMenu>
                </ButtonDropdown>
            );
        };
        return this.state.data.map((val) => {
            return (
                <DropdownItem>{val.first_name}</DropdownItem>
            )
        })
    }
    componentDidUpdate() {
        Axios.get("http://localhost:2000/users")
    }

    editdata = (id) => {
        this.setState({ selectedid: id })
        console.log(id)
    }


    renderUSerData = () => {
        return this.state.data.map((val) => {
            if (this.state.selectedid === val.id) {
                return (
                    <tr key={val.id}>
                        <th scope="row">{val.id}</th>
                        <td><input type="text" ref="first_name" placeholder="First Name" ></input></td>
                        <td><input type="text" ref="last_name" placeholder="Last Name" ></input></td>
                        <td><input type="text" ref="email" placeholder="Email" ></input></td>
                        <td><Button color='success' onClick={() => this.confirm(val.id)}>confirm</Button></td>
                        <td><Button color="secondary" onClick={() => this.setState({ selectedid: null })}>Cancel</Button></td>
                    </tr>
                )
            }
            else return (
                <tr>
                    <th scope="row">{val.id}</th>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                    <td><Button color='danger' onClick={() => this.deleteData(val.id)}>Delete</Button></td>
                    <td><Button color="warning" onClick={() => this.editdata(val.id)}>edit</Button></td>
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

    deleteData = (id) => {
        Axios.delete(`http://localhost:2000/users/${id}`)
            .then((res) => {
                // console.log(res.data)
                // this.setState({data: res.data})
                Axios.get('http://localhost:2000/users')
                    .then((res) => {
                        console.log(res.data)
                        this.setState({ data: res.data })
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    confirm = (id) => {
        var namaDepan = this.refs.first_name.value
        var namaBelakang = this.refs.last_name.value
        var email = this.refs.email.value
        Axios.put(`http://localhost:2000/users/${id}`, {
            first_name: namaDepan,
            last_name: namaBelakang,
            email: email,
        })
            .then((res) => {
                Axios.get('http://localhost:2000/users')
                    .then((res) => {
                        console.log(res.data)
                        this.setState({ data: res.data, selectedid: null })
                        this.renderUSerData()
                    })
            })
            .catch((err) => {
                console.log(err)
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
                        console.log(this.state.data)
                    })

            })
            .catch((err) => {

            })
    }


    render() {
        return (
            <div>
                {/* {this.renderdropdown()} */}
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ dropdownOpen: !this.state.dropdownOpen })}>
                    <DropdownToggle caret>
                        Button Dropdown
                  </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>{this.renderdropdown()}</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
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