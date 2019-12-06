import React, { Component } from "react"
import Axios from "axios"
import { connect } from "react-redux"
import Kartu from "../components/card"
import { Table, Form, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardTitle, Row, Col } from 'reactstrap';

class Home extends Component {

    state = {
        data: [],
        nama: ""
    }

    componentDidMount() {
        Axios.get("http://localhost:2000/products")
            .then((res) => {
                this.setState({ data: res.data })
                console.log(this.state.data)
                console.log(this.res.data)
            })
            .catch((err) => {

            })
    }

    renderCard = () => {
        return this.state.data.map((val) => {
            return (
                <Kartu contoh={val.nama} contoh2={val.harga} contoh3={val.image} />
            )
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center row mt-5">
                    {this.renderCard()}
                </div>
            </div >
        )
    }
}

export default (Home)