import StepLetter from "../../../layouts/StepLetter";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Button from "../../../components/Form/Button";
export default function ReserveTicket({ total, handleSubmit }) {
  return (
    <>
      <StepLetter>Fechado! O total ficou em {total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}. Agora é só confirmar:</StepLetter>
      <Button onClick={() => handleSubmit()}>FINALIZAR PAGAMENTO</Button>
    </>
  );
}

