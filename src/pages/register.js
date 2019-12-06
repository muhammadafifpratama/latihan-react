import React, { Component } from "react"
import { Button, Input } from 'reactstrap'
import Axios from 'axios'
import { login } from '../redux/action'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Register extends Component {

    bikinaccount = () => {
        let username = this.text.value;
        let password = this.pass.value;
        console.log(username)
        console.log(password)
        Axios.get(`http://localhost:2000/Login?username=${username}`)
            .then((res) => {
                if (res.data.length !== 0) {
                    alert("username sudah ada ")
                }
                else {
                    Axios.post('http://localhost:2000/login', {
                        username: username,
                        password: password,
                        role: "user"
                    })
                        .then((res) => {
                            this.props.login(res.data)
                        })
                }
            })
        // Axios.post('http://localhost:2000/login', {
        //     username: username,
        //     password: password,
        //     role: "user"
        // }).then((res) => {
        //     Axios.get(`http://localhost:2000/Login?username=${username}&password=${password}`);
        //     if (res.data.length !== 0) {
        //         return alert("username sudah ada ")
        //     } else {
        //         ((res) => {
        //             if (res.data.length === 0) {
        //                 alert('username or password invalid')
        //             } else {
        //                 console.log(res.data)
        //                 this.props.login(res.data[0])
        //             }
        //         })
        //             .catch((err) => {
        //                 console.log(err)
        //             })
        //     }
        // })
    }

    render() {
        if (this.props.username !== '') {
            return (
                <Redirect to='/carousel'>

                </Redirect>
            )
        }
        return (
            < div className='d-flex justify-content-center row' >
                <div>
                    <Input type='text' innerRef={(text) => this.text = text} />
                    <Input type='password' innerRef={(pass) => this.pass = pass} />
                    <Button onClick={this.bikinaccount}>
                        Click Me !
                    </Button>
                </div>
            </div >
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count: state.count.count,
        username: state.user.username,
        role: state.user.role
    }
}

export default connect(mapStatetoProps, { login })(Register)