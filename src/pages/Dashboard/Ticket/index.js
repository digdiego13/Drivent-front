import { useTicket } from "../../../contexts/TicketContext";
import SessionLetter from "../../../layouts/SessionLetter";
import TicketCards from "./TicketCards";
export default function Ticket() {
  //dados mocados que devem vir do servidor
  const { ticketInfo } = useTicket();
  const ticketTypes = [
    { id: 0, name: "Presencial", price: 250 },
    { id: 1, name: "Online", price: 100 }
  ];
  const hotelTypes = () => {
    if (ticketInfo.userTicketType.id === 0) {
      return [
        { id: 0, name: "Sem Hotel", price: 0 },
        { id: 1, name: "Com Hotel", price: 350 }
      ];
    };
    return [];
  };
  //fim dos dados mocados que devem vir do servidor
  return (
    <>
      <SessionLetter>Ingresso e Pagamento</SessionLetter>
      <TicketCards
        title='Primeiro, escolha sua modalidade de ingresso'
        ticketReference={"userTicketType"}
        ticketTypes={ticketTypes}
      />
      {
        !hotelTypes().length ? <></> :
          <TicketCards
            title='Ótimo, agora escolhe sua modalidade de hospedagem'
            ticketTypes={hotelTypes()}
            ticketReference={"userHotel"}
          /> 
      }
    </>
  );
}
