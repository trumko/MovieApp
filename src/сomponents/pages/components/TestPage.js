import React, { Component } from "react";

import FirstType from "сomponents/Experimental/FirstType/FirstType";
import { SecondType } from "сomponents/Experimental/SecondType";
import ThirdType from "сomponents/Experimental/ThirdType";
import FourthType from "сomponents/Experimental/FourthType";

export default class TestPage extends Component {
  render() {
    return (
      <div>
        <p>Test page</p>
        <FirstType>First type</FirstType>
        <SecondType />
        <ThirdType />
        <FourthType />
      </div>
    );
  }
}
