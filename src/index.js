import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Web3 from "web3";

import "bootstrap/dist/css/bootstrap.min.css";

const abi = require("./utils/abi.json");
const contractAddress = "0x66f3bb109df1ddcd0c92838e668fe01ee93c0ad7";
const somePrivateKey = "";

window.web3 = new Web3(window.ethereum);
window.ethereum.enable();

window.web3.contractInstance = new window.web3.eth.Contract(
  abi,
  contractAddress
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
