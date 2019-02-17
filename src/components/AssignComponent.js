import React, { Component } from "react";

import { FormControl, Button, Container, Form } from "react-bootstrap";

import Swal from "sweetalert2";

export default class AssignComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currency: "EUR",
      to: "",
      emmitedAssetId: null
    };
  }

  async assign() {
    Swal.fire({
      title: "Emitting asset...",
      showCancelButton: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

    const { amount, currency, to } = this.state;

    const data = window.web3.utils.hexToBytes(
      window.web3.utils.asciiToHex(amount + currency)
    );

    const address = (await window.web3.eth.getAccounts())[0];

    const txReceipt = await window.web3.contractInstance.methods
      .assign(to, data)
      .send({ from: address })
      .on("transactionHash", () => {
        Swal.fire({
          title: "Asset emitted",
          text:
            "However, Ethereum network may need some time to reflect the acceptation.",
          type: "success"
        });
      })
      .catch(err => {
        Swal.fire({
          title: "An error occurred.",
          text: err,
          type: "error"
        });
      });
    const assetId = txReceipt.events.AssetAssign.returnValues.id;
    this.setState({ emmitedAssetId: assetId });
  }

  render() {
    const { amount, currency, to } = this.state;
    console.log(this.state);
    return (
      <div className="AssignComponent">
        <Container>
          <FormControl
            className="mt-2"
            placeholder="amount"
            name="amount"
            value={amount}
            onChange={e => this.setState({ amount: e.target.value })}
          />
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label />
            <Form.Control
              as="select"
              value={currency}
              onChange={e => this.setState({ currency: e.target.value })}
            >
              <option>EUR</option>
              <option>PLN</option>
              <option>USD</option>
            </Form.Control>
          </Form.Group>
          <FormControl
            className="mt-2"
            placeholder="to"
            name="to"
            value={to}
            onChange={e => this.setState({ to: e.target.value })}
          />
          <Button
            name="assign"
            className="mt-2"
            onClick={async () => this.assign()}
          >
            Assign
          </Button>
        </Container>
      </div>
    );
  }
}
