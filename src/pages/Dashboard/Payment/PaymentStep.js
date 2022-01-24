import StepLetter from "../../../layouts/StepLetter";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import PaymentForm from "./CreditCard";
import useApi from "../../../hooks/useApi";
import PaymentFinished from "./PaymentFinished";

export default function PaymentStep({
  ticketInfo,
  paymentDone,
  setPaymentDone,
}) {
  const { payment } = useApi();
  const { ticketType, thereIsHotel, totalPrice } = ticketInfo;

  if (ticketType === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <StepLetter>Ingresso escolhido</StepLetter>
      <TicketContainer>
        <>{`${ticketType} + ${thereIsHotel ? "Com Hotel" : "Sem Hotel"}`}</>
        <TotalPrice variant="subtitle2">{`R$ ${totalPrice}`}</TotalPrice>
      </TicketContainer>
      <StepLetter>Pagamento</StepLetter>
      <CreditCard>
        {paymentDone ? (
          <PaymentFinished></PaymentFinished>
        ) : (
          <PaymentForm
            ticketInfo={ticketInfo}
            payment={payment}
            setPaymentDone={setPaymentDone}
          ></PaymentForm>
        )}
      </CreditCard>
    </>
  );
}

const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 108px;
  border-radius: 20px;
  background-color: #ffeed2;
`;

const TotalPrice = styled(Typography)`
  color: #898989;
`;

const CreditCard = styled.div`
  width: 500px;
`;
