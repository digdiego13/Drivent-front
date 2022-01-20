import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from "react";

const Context = createContext();

const TicketContext = function({ children }) {
  const [ticketInfo, setTicketInfo] = useState({});

  //CRIANDO MOCK DO TICKETINFO
  useEffect(() => {
    setTicketInfo({
      ...ticketInfo,
      userTicketType: { id: 0, name: "Presencial" },
      userThereIsHotel: false,
      userTotalPrice: 345,
    });
  }, []);

  const contextValue = useMemo(() => ({
    ticketInfo, setTicketInfo
  }), [ticketInfo, setTicketInfo]);

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
};

export default TicketContext;

export const useTicket = () => useContext(Context);
