import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "components/AppWrapper/AppWrapper"

console.log(`enviroment: ${env}`);

ReactDOM.hydrate(<AppWrapper />, document.getElementById('root'));
