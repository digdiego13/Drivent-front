import { useTicket } from "../../../contexts/TicketContext";
import SessionLetter from "../../../layouts/SessionLetter";
import TicketCards from "./TicketCards";
export default function Ticket() {
  const { ticketInfo } = useTicket();

  return (
    <>
      <SessionLetter>Ingresso e Pagamento</SessionLetter>
      <TicketCards
        ticketInfo={ticketInfo}
        title='Primeiro, escolha sua modalidade de ingresso'
      />
    </>
  );
}
