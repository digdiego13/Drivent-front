import StepLetter from "../../../layouts/StepLetter";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { useTicket } from "../../../contexts/TicketContext";
export default function TicketCards({ title }) {
  const ticket = useTicket();
  //mock dos tipos de ticket
  const { ticketInfo } = ticket;
  const ticketTypes = [
    { id: 0, name: "Presencial", price: 250 },
    { id: 1, name: "Online", price: 100 }
  ];
  //fim dos mocks dos tipos
  return (
    <>
      <StepLetter>{title}</StepLetter>
      <TicketsCardsContainer>
        {
          ticketTypes.map(ticketType => {
            return(
              <TicketContainer isSelected={ticketInfo.userTicketType?.id === ticketType.id}>
                <>{`${ticketType.name}`}</>
                <TotalPrice variant="subtitle2">{ticketType.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</TotalPrice>
              </TicketContainer>);
          })
        }
      </TicketsCardsContainer>

    </>
  );
}

const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 145px;
  height: 145px;
  border-radius: 20px;
  background-color: ${({ isSelected }) => isSelected ? "#FFEED2" : "inherit"};
  border: ${({ isSelected }) => isSelected ? "1px solid #FFEED2" : "1px solid #cecece"} ;
  :hover{
    cursor: pointer;
  }
`;

const TicketsCardsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const TotalPrice = styled(Typography)`
  color: #898989;
`;

