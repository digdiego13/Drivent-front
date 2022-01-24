import React from "react";
import Cards from "react-credit-cards";
import Button from "../../../components/Form/Button";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";
import { toast } from "react-toastify";

export default class PaymentForm extends React.Component {
  constructor({ ticketInfo, payment, setPaymentDone }) {
    super();
    this.ticketInfo = ticketInfo;
    this.payment = payment;
    this.setPaymentDone = setPaymentDone;
  }

  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.payment
      .save(this.ticketInfo)
      .then(() => {
        toast("Ingresso pago");
        this.setPaymentDone(true);
      })
      .catch((error) => {
        if (error.response?.data?.details) {
          for (const detail of error.response.data.details) {
            toast(detail);
          }
        } else {
          toast("Não foi possível");
        }
        /* eslint-disable-next-line no-console */
        console.log(error);
      });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Flex>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />

          <form id={"creditCard"} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <Input
                pattern="[\d| ]{16,22}"
                className="form-control"
                required
                type="tel"
                name="number"
                placeholder="Card Number"
                format={formatCreditCardNumber}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>

            <Input
              type="text"
              name="name"
              placeholder="Person Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              required
            />
            <Flex>
              <InputSmall
                type="text"
                name="expiry"
                placeholder="Exp. Date"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                pattern="\d\d/\d\d"
                format={formatExpirationDate}
                required
              />
              <InputSmall
                required
                type="number"
                name="cvc"
                placeholder="CVC"
                pattern="\d{3,4}"
                format={formatCVC}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </Flex>
          </form>
        </Flex>
        <Button form={"creditCard"} type={"submit"}>
          FINALIZAR PAGAMENTO
        </Button>
      </div>
    );
  }
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 300px;
  height: 48px;
  font-size: 20px;
  border-radius: 7px;
  margin: 0px 0px 20px 20px;
  padding-left: 10px;
`;

const InputSmall = styled.input`
  width: 120px;
  height: 48px;
  font-size: 20px;
  border-radius: 7px;
  margin: 0px 0px 20px 20px;
  padding-left: 10px;
`;
