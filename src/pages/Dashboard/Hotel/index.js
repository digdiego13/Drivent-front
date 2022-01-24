import { useEffect, useState } from "react";
import SessionLetter from "../../../layouts/SessionLetter";
import ShowNoHotel from "./ShowNoHotel";
import useApi from "../../../hooks/useApi";

export default function Hotel() {
  const [hotelOptions, setHotelOptions] = useState({});
  const { hotel } = useApi();

  useEffect(() => {
    setHotelOptions({
      ...hotelOptions,
      ticketType: "Presencial",
      thereIsHotel: true,
      paymentDone: false,
    });

    hotel
      .getHotelInformation()
      .then(() => {})
      .catch(() => {});
  }, []);

  return (
    <>
      <SessionLetter>Escolha de hotel e quarto</SessionLetter>
      {hotelOptions.paymentDone ? (<></>) : (<ShowNoHotel hotelOptions={hotelOptions}/>)}
    </>
  );
}
