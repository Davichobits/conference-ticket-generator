import { useShowTicket } from "../hooks/show-ticket";
import { ConfirmationPage } from "./confirmation-page/confirmation-page"
import { MainLayout } from "./main-layout/main-layout"
import { TicketFormPage } from "./ticket-form-page/ticket-form-page";

export const MainPage = () => {
  const {showTicket} = useShowTicket();
  return (
    <MainLayout>
      {
        showTicket 
        ? (<ConfirmationPage />) 
        : (<TicketFormPage />)
      }
    </MainLayout>
  )
}
