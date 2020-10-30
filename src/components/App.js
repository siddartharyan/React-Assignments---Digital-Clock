import React, { Component, useEffect, useRef, useState } from "react";
import "../styles/App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      id: null
    };
  }
  componentDidMount() {
    let id1 = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
    this.setState({ id: id1 });
  }
  componentWillUnmount() {
    clearInterval(this.state.id);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}
export default App;
