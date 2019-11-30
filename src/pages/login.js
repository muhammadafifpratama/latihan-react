import React, { Component } from "react"

class login extends Component {
    render() {
        return (
            <div>
                username<br></br>
                <input type="text"></input><br></br>
                password<br></br>
                < input type="password" ></input ><br></br>
                <button onClick={event => window.location.href = '/carousel'}>login</button>
            </div >
        )
    }
}

export default login