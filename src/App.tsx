import { ShowTicketProvider } from './contexts/show-ticket-provider';
import { MainPage } from './components/main-page';

function App() {
  return (
    <ShowTicketProvider>
      <MainPage />
    </ShowTicketProvider>
  );
}

export default App;
