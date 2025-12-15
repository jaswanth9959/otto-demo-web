import Button from "../components/Button";

const Contact = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <section className="flex flex-col h-[320px] w-full text-black-20 text-center md:h-[380px] xl:h-[420px] justify-center items-center md:py-3 gap-14">
      <h1 className="bold-36 xl:bold-64">Book a Demo</h1>
      <p className="bold-16 whitespace-break-spaces hidden md:block">{`Interested in learning more?\nSign up for a demo with our team.`}</p>
      <p className="bold-16 whitespace-break-spaces block md:hidden">{`Interested in learning more?\nSign up for a demo with\nour team.`}</p>
      <Button content="Book a Demo" textColor="white" OnClick={handleOpen} />
    </section>
  );
};

export default Contact;
