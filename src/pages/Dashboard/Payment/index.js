import { useEffect } from "react";
import { useState } from "react";
import SessionLetter from "../../../layouts/SessionLetter";
import PaymentStep from "./PaymentStep";
import useApi from "../../../hooks/useApi";
import { toast } from "react-toastify";
export default function Payment() {
  const [ticketInfo, setTicketInfo] = useState({});
  const { payment } = useApi();
  const [paymentDone, setPaymentDone] = useState(false);
  //CRIANDO MOCK DO TICKETINFO
  useEffect(() => {
    setTicketInfo({
      ...ticketInfo,
      ticketType: "Presencial",
      thereIsHotel: false,
      totalPrice: 345,
    });

    payment
      .getTicketInformation()
      .then((res) => {
        if (res.status === 200) {
          setPaymentDone(true);
        }
      })
      .catch((error) => {
        if (error.response?.data?.details) {
          for (const detail of error.response.data.details) {
            toast(detail);
          }
        } else {
          toast("Não foi possível");
        }
        /* eslint-disable-next-line no-console */
        console.log(error);
      });
  }, []);

  return (
    <>
      <SessionLetter>Ingresso e Pagamento</SessionLetter>
      <PaymentStep
        ticketInfo={ticketInfo}
        paymentDone={paymentDone}
        setPaymentDone={setPaymentDone}
      ></PaymentStep>
    </>
  );
}
