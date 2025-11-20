import { ShowTicketContext } from "./show-ticket-context";
import { useState, type ReactNode } from "react";

export const ShowTicketProvider = ({ children }: { children: ReactNode }) => {
  const [showTicket, setShowTicket] = useState(false);

  return (
    <ShowTicketContext.Provider value={{ showTicket, setShowTicket }}>
      {children}
    </ShowTicketContext.Provider>
  );
};