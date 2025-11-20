import { createContext } from "react";

interface ShowTicketContextType {
  showTicket: boolean;
  setShowTicket: (showTicket: boolean) => void;
}

export const ShowTicketContext = createContext<ShowTicketContextType>({
  showTicket: false,
  setShowTicket: () => {},
});