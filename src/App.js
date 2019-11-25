import React, { Component } from "react";
import { Route } from "react-router-dom"
import home from "./pages/home"
import nothome from "./pages/nothome"
import Navbar from "./components/navbar"

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Route path="/" component={home} exact />
        <Route path="/not-home" component={nothome} exact />
      </div>
    )
  }

  //   state = {
  //     nama: "lian",
  //     sekolah: "purwadhika",
  //     number: 0
  //   }

  //   gantinama = () => { this.setState({ nama: "andi", sekolah: "pwd" }) }
  //   tambah = () => { this.setState({ number: this.state.number + 1 }) }
  //   kurang = () => { this.setState({ number: this.state.number - 1 }) }

  //   render() {
  //     return (
  //       <div>
  //         <div>
  //           {this.state.number}
  //           <div>                                                                                                                                                                                                                                                                                                                        nbbv>
  //             <button onClick={this.tambah}>+</button>
  //             <button onClick={this.kurang}>-</button>
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   }
}


export default App;
