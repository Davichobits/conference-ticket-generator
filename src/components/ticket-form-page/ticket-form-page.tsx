import { Form } from './form/form';
import { Hero } from './hero';

export const TicketFormPage = ({
  handleClick,
}: {
  handleClick: () => void;
}) => {
  return (
    <section>
      <Hero styles='mb-10' />
      <Form styles='md:max-w-[522px] md:mx-auto' setIsShow={handleClick} />
    </section>
  );
};
