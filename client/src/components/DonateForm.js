import React, { Component } from "react";
import Checkout from "./Checkout";

class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 5.0,
      name: "Support Travel Planner",
      description: "Give us your money!",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ amount: evt.target.value });
  }

  render() {
    return (
      <div>
        <h3 className="text-center mb-3">Donation: £{this.state.amount}</h3>
        <div className="d-inline">
          <div className="input-group">
            <span className="input-group-text">£</span>
            <input
              className="form-control"
              type="number"
              min="1"
              step="any"
              id="paymentAmount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="d-inline">
          <Checkout
            name={this.state.name}
            description={this.state.description}
            amount={this.state.amount}
          />
        </div>
      </div>
    );
  }
}

export default DonateForm;
