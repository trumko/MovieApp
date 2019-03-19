import React, { Component } from "react";
import { render } from "react-dom";
import FirstType from "../Experimental/FirstType/FirstType";
import { SecondType } from "../Experimental/SecondType";
import ThirdType from "../Experimental/ThirdType";
import FourthType from "../Experimental/FourthType";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Hello React!</h2>
        <FirstType>Functional Component</FirstType>
        <SecondType />
        <ThirdType />
        <FourthType />
      </div>
    );
  }
}
