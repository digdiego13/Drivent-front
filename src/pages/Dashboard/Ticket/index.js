import { useTicket } from "../../../contexts/TicketContext";
import SessionLetter from "../../../layouts/SessionLetter";
import ReserveTicket from "./reserveTicket";
import TicketCards from "./TicketCards";
import { useHistory } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";
 
export default function Ticket() {
  let history = useHistory();
  const [ticketTypes, setTicketTypes] = useState([]);
  const { ticketInfo } = useTicket();
  const eventType = useApi();
  useEffect(() => {
    eventType
      .adm
      .getEventType()
      .then((res) => setTicketTypes(res.data));
  }, []);
  //dados mocados que devem vir do servidor

  if (!ticketTypes.length) {
    return <></>;
  }
  const hotelTypes = () => {
    if (!ticketInfo.userTicketType) return []; 
    if (ticketInfo.userTicketType.id === 0) {
      return [
        { id: 0, name: "Sem Hotel", price: 0 },
        { id: 1, name: "Com Hotel", price: 350 }
      ];
    };
    return [];
  };
  //fim dos dados mocados que devem vir do servidor
  const submitReserve = () => {
    history.push("/dashboard/payment");
  };
  return (
    <>
      <SessionLetter>Ingresso e Pagamento</SessionLetter>
      <TicketCards
        title='Primeiro, escolha sua modalidade de ingresso'
        ticketReference={"userTicketType"}
        ticketTypes={ticketTypes}
      />
      {
        !hotelTypes().length ?
          <></> :
          <TicketCards
            title='Ótimo, agora escolhe sua modalidade de hospedagem'
            ticketTypes={hotelTypes()}
            ticketReference={"userHotel"}
          /> 
      }
      {
        hotelTypes().length && ticketInfo.userHotel ?
          <ReserveTicket
            total={ticketInfo.userTicketType.price + ticketInfo.userHotel.price}
            handleSubmit={submitReserve}
          /> :
          <></>
      }
    </>
  );
}
