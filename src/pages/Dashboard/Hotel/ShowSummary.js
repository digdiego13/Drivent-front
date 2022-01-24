import { useState, useEffect } from "react";
import styled from "styled-components";
import StepLetter from "../../../layouts/StepLetter";
import Button from "../../../components/Form/Button";

export default function ShowSummary({ hotelOptions }) {
  const { guests, roomNumber, roomType } = hotelOptions;
  const [guestsAmount, setGuestAmount] = useState("");
  const [roomInfo, setRoomInfo] = useState("");
  
  useEffect(() => {
    setRoomInfo(`${roomNumber} (${roomType})`);
    guests === 1
      ? setGuestAmount("Somente você")
      : guests === 2
        ? setGuestAmount("Você e mais 1 pessoa")
        : setGuestAmount(`Você e mais ${guests - 1} pessoas`);
  }, []);

  return (
    <>
      <StepLetter>Você já escolheu seu quarto:</StepLetter>
      <ChosenHotel>
        <HotelPhoto />
        <HotelName>Driven Resort</HotelName>
        <div>
          <p>Quarto reservado</p>
          <p>{roomInfo}</p>
        </div>
        <div>
          <p>Pessoas no seu quarto</p>
          <p>{guestsAmount}</p>
        </div>
      </ChosenHotel>
      <Button type={"button"}>
        TROCAR DE QUARTO
      </Button>
    </>
  );
}

const ChosenHotel = styled.div`
  width: 196px;
  height: 264px;
  background: #ffeed2;
  border-radius: 10px;
  padding: 16px 14px 22px;
  margin-bottom: 36px;

  div {
    &:first-of-type {
      margin-bottom: 14px;
    }
    p {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-size: 12px;
      line-height: 14px;
      color: #3c3c3c;
      &:first-of-type {
        font-weight: bold;
        margin-bottom: 2px;
      }
      &:last-of-type {
        font-weight: normal;
      }
    }
  }
`;

const HotelPhoto = styled.img`
  width: 168px;
  height: 109px;
  background: url(image.png);
  border-radius: 5px;
`;

const HotelName = styled.p`
  margin: 10px 0px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 23px;
  color: #343434;
`;
