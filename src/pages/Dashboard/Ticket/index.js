import SessionLetter from "../../../layouts/SessionLetter";
import TicketCards from "./TicketCards";
export default function Ticket() {
  return (
    <>
      <SessionLetter>Ingresso e Pagamento</SessionLetter>
      <TicketCards
        title='Primeiro, escolha sua modalidade de ingresso'
      />
    </>
  );
}
