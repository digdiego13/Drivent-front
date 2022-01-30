import { useEffect, useState } from "react";
import { useTicket } from "../../../contexts/TicketContext";
import SessionLetter from "../../../layouts/SessionLetter";
import ShowNoHotel from "./ShowNoHotel";
import ShowSummary from "./ShowSummary";
import useApi from "../../../hooks/useApi";

export default function Hotel() {
  const [hotelOptions, setHotelOptions] = useState({});
  const { hotel } = useApi();
  const { ticketInfo, updateTicket } = useTicket();
  console.log(ticketInfo);

  useEffect(() => {
    setHotelOptions({
      ...hotelOptions,
      ticketType: "Presencial",
      thereIsHotel: true,
      paymentDone: true,
      guests: 2,
      roomNumber: 101,
      roomType: "Double",
    });

    hotel
      .getHotelInformation()
      .then(() => {})
      .catch(() => {});
  }, []);

  return (
    <>
      <SessionLetter>Escolha de hotel e quarto</SessionLetter>
      {hotelOptions.paymentDone && hotelOptions.thereIsHotel 
        ? (<ShowSummary hotelOptions={hotelOptions} updateTicket={updateTicket} ticketInfo={ticketInfo}/>
        ) : (
          <ShowNoHotel hotelOptions={hotelOptions}/>)}
    </>
  );
}
