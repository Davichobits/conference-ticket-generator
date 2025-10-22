import { useState } from 'react';
import { TicketFormPage, ConfirmationPage, MainLayout } from './components';

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleClick = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <MainLayout>
      {
        isShow 
        ? (<ConfirmationPage />) 
        : (<TicketFormPage handleClick={handleClick} />)
      }
    </MainLayout>
  );
}

export default App;
