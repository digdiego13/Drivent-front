import { useEffect, useState } from "react";
import SessionLetter from "../../../layouts/SessionLetter";
import ShowNoHotel from "./ShowNoHotel";
import ShowSummary from "./ShowSummary";
import useApi from "../../../hooks/useApi";

export default function Hotel() {
  const [hotelOptions, setHotelOptions] = useState({});
  const { hotel } = useApi();

  useEffect(() => {
    setHotelOptions({
      ...hotelOptions,
      ticketType: "Presencial",
      thereIsHotel: true,
      paymentDone: true,
      guests: 2
    });

    hotel
      .getHotelInformation()
      .then(() => {})
      .catch(() => {});
  }, []);

  return (
    <>
      <SessionLetter>Escolha de hotel e quarto</SessionLetter>
      {hotelOptions.paymentDone && hotelOptions.thereIsHotel ? (<ShowSummary hotelOptions={hotelOptions}/>) : (<ShowNoHotel hotelOptions={hotelOptions}/>)}
    </>
  );
}
