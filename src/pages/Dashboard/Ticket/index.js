import { useEffect } from "react";
import { useState } from "react";
import SessionLetter from "../../../layouts/SessionLetter";
import PaymentStep from "./PaymentStep";
export default function Ticket() {
  const [ticketInfo, setTicketInfo] = useState({});

  //CRIANDO MOCK DO TICKETINFO
  useEffect(() => {
    setTicketInfo({
      ...ticketInfo,
      ticketType: "Presencial",
      thereIsHotel: false,
      totalPrice: 345,
    });
  }, []);

  return (
    <>
      <SessionLetter>Ingresso e Pagamento</SessionLetter>
      <PaymentStep ticketInfo={ticketInfo}></PaymentStep>
    </>
  );
}
