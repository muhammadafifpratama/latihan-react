import React, { Component } from "react"
import { Button, Input } from 'reactstrap'
import Axios from 'axios'
import { login } from '../redux/action'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Ganti extends Component {

    ganti = () => {
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
                Axios.put('http://localhost:2000/login', {
                    username: username,
                    password: password,
                    role: "user"
                })
            }
        })
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

export default Ganti