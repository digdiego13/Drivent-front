import React, {
  useState,
  createContext,
  useMemo,
  useContext,
} from "react";

const Context = createContext();

const TicketContext = function({ children }) {
  const [ticketInfo, setTicketInfo] = useState({});

  //CRIANDO MOCK DO TICKETINFO

  const updateTicket = ({ input, value }) => {
    const newTicketInfo = { ...ticketInfo };
    newTicketInfo[input] = value;
    setTicketInfo(newTicketInfo);
  };

  const contextValue = useMemo(() => ({
    ticketInfo, updateTicket
  }), [ticketInfo, updateTicket]);

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
};

export default TicketContext;

export const useTicket = () => useContext(Context);
