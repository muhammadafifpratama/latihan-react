import React, { Component } from "react";

class App extends Component {

  state = {
    nama: "lian",
    sekolah: "purwadhika",
    number: 0
  }

  gantinama = () => { this.setState({ nama: "andi", sekolah: "pwd" }) }
  tambah = () => { this.setState({ number: this.state.number + 1 }) }
  kurang = () => { this.setState({ number: this.state.number - 1 }) }

  render() {
    return (
      <div>
        <div>
          {this.state.number}
          <div>                                                                                                                                                                                                                                                                                                                        nbbv>
            <button onClick={this.tambah}>+</button>
            <button onClick={this.kurang}>-</button>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
