import StepLetter from "../../../layouts/StepLetter";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import PaymentForm from "./CreditCard";

export default function PaymentStep({ ticketInfo }) {
  const { ticketType, thereIsHotel, totalPrice } = ticketInfo;
  return (
    <>
      <StepLetter>Ingresso escolhido</StepLetter>
      <TicketContainer>
        <>{`${ticketType} + ${thereIsHotel ? "Com Hotel" : "Sem Hotel"}`}</>
        <TotalPrice variant="subtitle2">{`R$ ${totalPrice}`}</TotalPrice>
      </TicketContainer>
      <StepLetter>Pagamento</StepLetter>
      <Co>
        <PaymentForm></PaymentForm>
      </Co>
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

const Co = styled.div`
  width: 500px;
`;
