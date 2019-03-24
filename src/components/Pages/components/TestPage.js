import React, { Component } from "react";

import FirstType from "components/Experimental/FirstType/FirstType";
import { SecondType } from "components/Experimental/SecondType";
import ThirdType from "components/Experimental/ThirdType";
import FourthType from "components/Experimental/FourthType";

export default class TestPage extends Component {
  render() {
    return (
      <div className="mr_content mr_container">
        <p>Test page</p>
        <FirstType>First type</FirstType>
        <SecondType />
        <ThirdType />
        <FourthType />
      </div>
    );
  }
}
