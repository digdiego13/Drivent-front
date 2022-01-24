import styled from "styled-components";

export default function ShowNoHotel({ hotelOptions }) {
  return (
    <MessageContainer>
      {hotelOptions.ticketType === "Online" || !hotelOptions.thereIsHotel ? (
        <AlertText width="474px">Sua modalidade de ingresso não inclui hospedagem <br/> Prossiga para a escolha de atividades</AlertText>
      ) : (
        <AlertText width="414px">Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</AlertText>
      )}
    </MessageContainer>
  );
}

const MessageContainer = styled.section`
  width: 100%;
  height: calc(100% - 91px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertText = styled.p`
  font-family: "Roboto", sans-serif;
  width: ${(props) => props.width};
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8E8E8E;
`;
