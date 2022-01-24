import { useEffect, useState } from "react";
import SessionLetter from "../../../layouts/SessionLetter";
import ShowNoHotel from "./ShowNoHotel";

export default function Hotel() {
  const [hotelOptions, setHotelOptions] = useState({});

  useEffect(() => {
    setHotelOptions({
      ...hotelOptions,
      ticketType: "Presencial",
      thereIsHotel: false
    });
  }, []);

  return (
    <>
      <SessionLetter>Escolha de hotel e quarto</SessionLetter>
      <ShowNoHotel hotelOptions={hotelOptions}/>
    </>
  );
}
