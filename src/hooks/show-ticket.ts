import { useContext } from "react";
import { ShowTicketContext } from "../contexts/show-ticket-context";

export const useShowTicket = () => {
  const { showTicket, setShowTicket } = useContext(ShowTicketContext);
  return { showTicket, setShowTicket };
};