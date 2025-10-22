import { Congrats } from './congrats';
import { TicketGenerated } from './ticket-generated';

export const ConfirmationPage = () => {
  return (
    <section>
      <Congrats />
      <TicketGenerated />
    </section>
  );
};
