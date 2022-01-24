import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { AiFillCheckCircle } from "react-icons/ai";

export default function PaymentFinished() {
  return (
    <>
      <Flex>
        <CheckSymbol></CheckSymbol>
        <div>
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            Pagamento confirmado!
          </Typography>
          <Typography variant={"body1"}>
            Prossiga para escolha de hospedagem e atividades
          </Typography>
        </div>
      </Flex>
    </>
  );
}

const CheckSymbol = styled(AiFillCheckCircle)`
  color: green;
  font-size: 55px;
  margin-right: 20px;
`;

const Flex = styled.div`
  display: flex;
`;
