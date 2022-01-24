import StepLetter from "../../../layouts/StepLetter";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Button from "../../../components/Form/Button";
export default function ReserveTicket({ total, handleSubmit }) {
  console.log(total);
  return (
    <>
      <StepLetter>Fechado! O total ficou em {total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}. Agora é só confirmar:</StepLetter>
      <Button onClick={() => handleSubmit()}>FINALIZAR PAGAMENTO</Button>
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

