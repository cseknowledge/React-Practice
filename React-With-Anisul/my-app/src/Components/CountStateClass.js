import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";

export default class CountStateClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      message: "",
    };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div style={{ background: "white", padding: "15px" }}>
        <h2>Count: {count}</h2>
        <Button
          className="btn-custom"
          variant="success"
          onClick={this.handleIncrement}
        >
          <MdExposurePlus1 /> Increment
        </Button>
        <Button
          className="btn-custom"
          variant="warning"
          onClick={this.handleDecrement}
          disabled={count === 0 ? true : false}
        >
          <MdExposureNeg1 /> Decrement
        </Button>
      </div>
    );
  }
}
