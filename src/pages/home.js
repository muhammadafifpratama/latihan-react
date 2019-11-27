import React, { Component } from "react"
import Axios from "axios"
import { Table, Form, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardTitle, Row, Col } from 'reactstrap';
import Kartu from '../components/card'
import Example from '../components/dropdown'

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
                <Example x={this.renderdropdown()}></Example>
                {/* <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ dropdownOpen: !this.state.dropdownOpen })}>
                    <DropdownToggle caret>
                        Button Dropdown
                  </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>{this.renderCard()}</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown> */}

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

// import React, { Component } from 'react'
// import Axios from 'axios'
// import { Table, Input, Button } from 'reactstrap';
// import Kartu from '../components/card'
// import Example from '../components/dropdown'

// class Home extends Component {

//     state = {
//         data: [],
//         buah: [],
//         selectedId: null,
//         dropdownOpen: false
//     }

//     componentDidMount() {
//         Axios.get('http://localhost:2000/users')
//             .then((res) => {
//                 // console.log(res.data)
//                 this.setState({ data: res.data })
//                 // console.log(this.state.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
//     editData = (id) => {
//         this.setState({ selectedId: id })
//         console.log(this.state.selectedId)
//     }

//     renderUserData = () => {
//         return this.state.data.map((val, index) => {
//             if (this.state.selectedId === val.id) {
//                 return (
//                     <tr key={val.id}>
//                         <td></td>
//                         <td>
//                             <Input type="text" innerRef={(namaDepanEdit) => this.namaDepanEdit = namaDepanEdit} />
//                         </td>
//                         <td>
//                             <Input type="text" innerRef={(namaBelakangEdit) => this.namaBelakangEdit = namaBelakangEdit} />
//                         </td>
//                         <td>
//                             <Input type="text" innerRef={(emailEdit) => this.emailEdit = emailEdit} />
//                         </td>
//                         <td><Button color='primary' onClick={() => this.confirmEdit(val.id)}>Confirm</Button></td>
//                         <td><Button color='secondary' onClick={() => this.setState({ selectedId: null })}>Cancel</Button></td>
//                     </tr>
//                 )
//             }
//             return (
//                 <tr key={val.id}>
//                     <th scope="row">{index + 1}</th>
//                     <td>{val.first_name}</td>
//                     <td>{val.last_name}</td>
//                     <td>{val.email}</td>
//                     <td><Button color='success' onClick={() => this.editData(val.id)}>Edit</Button></td>
//                     <td><Button color='danger' onClick={() => this.deleteData(val.id)}>Delete</Button></td>
//                 </tr>
//             )
//         })
//     }

//     confirmEdit = (id) => {
//         var namaDepan = this.namaDepanEdit.value;
//         var namaBelakang = this.namaBelakangEdit.value;
//         var email = this.emailEdit.value;
//         Axios.put(`http://localhost:2000/users/${id}`, {
//             first_name: namaDepan,
//             last_name: namaBelakang,
//             email: email,
//         })
//             .then(() => {
//                 Axios.get('http://localhost:2000/users')
//                     .then((res) => {
//                         console.log(res.data)
//                         this.setState({ data: res.data, selectedId: null })
//                     })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     deleteData = (id) => {
//         Axios.delete(`http://localhost:2000/users/${id}`)
//             .then(() => {
//                 Axios.get('http://localhost:2000/users')
//                     .then((res) => {
//                         console.log(res.data)
//                         this.setState({ data: res.data })
//                     })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     renderCard = () => {
//         return this.state.data.map((val) => {
//             return (
//                 <Kartu contoh={val.first_name} contoh2={val.last_name} contoh3={val.email} />
//             )
//         })
//     }

//     renderdropdown = () => {
//         return this.state.data.map((val) => {
//             return (
//                 <Example sembarang={val.first_name} />
//             )
//         })
//     }

//     submitData = () => {
//         var namaDepan = this.namaDepan.value;
//         var namaBelakang = this.namaBelakang.value;
//         var email = this.email.value;
//         console.log(namaDepan)
//         console.log(namaBelakang)
//         console.log(email)
//         Axios.post('http://localhost:2000/users', {
//             first_name: namaDepan,
//             last_name: namaBelakang,
//             email: email
//         })
//             .then((res) => {
//                 // console.log(res.data)
//                 // this.setState({data: res.data})
//                 Axios.get('http://localhost:2000/users')
//                     .then((res) => {
//                         this.setState({ data: res.data })
//                         this.namaDepan.value = '';
//                         this.namaBelakang.value = '';
//                         this.email.value = '';
//                     })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderdropdown()}
//                 <Table>
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Username</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.renderUserData()}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td>
//                                 #
//                             </td>
//                             <td>
//                                 <Input type="text" innerRef={(namaDepan) => this.namaDepan = namaDepan} />
//                             </td>
//                             <td>
//                                 <Input type="text" innerRef={(namaBelakang) => this.namaBelakang = namaBelakang} />
//                             </td>
//                             <td>
//                                 <Input type="text" innerRef={(email) => this.email = email} />
//                             </td>
//                             <td>
//                                 <Button color='primary' onClick={this.submitData}>
//                                     Submit
//                                 </Button>
//                             </td>
//                         </tr>
//                     </tfoot>
//                 </Table>
//                 {/* {this.renderCard(this.renderdropdown())} */}
//             </div>
//         )
//     }
// }

// export default Home