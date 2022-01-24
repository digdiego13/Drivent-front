import StepLetter from "../../../layouts/StepLetter";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { useTicket } from "../../../contexts/TicketContext";
export default function TicketCards({ title, ticketTypes, ticketReference }) {
  //mock dos tipos de ticket
  const { ticketInfo, updateTicket } = useTicket();
  return (
    <>
      <StepLetter>{title}</StepLetter>
      <TicketsCardsContainer>
        {
          ticketTypes.map(type => {
            return(
              <TicketContainer key={type.id}
                isSelected={ticketInfo[ticketReference]?.id === type.id}
                onClick={() => updateTicket({ value: type, input: ticketReference })}
              >
                <>{`${type.name}`}</>
                <TotalPrice variant="subtitle2">{type.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</TotalPrice>
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

