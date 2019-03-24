import React, { Component } from "react";

export default class ThirdType extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  changeColor = () => {
    this.setState((state, props) => {
      return { color: state.color === "red" ? "green" : "red" };
    });
  };

  render() {
    return (
      <p
        onClick={this.changeColor}
        style={{
          color: this.state.color,
          cursor: "default",
          userSelect: "none"
        }}
      >
        Class Component
      </p>
    );
  }
}
