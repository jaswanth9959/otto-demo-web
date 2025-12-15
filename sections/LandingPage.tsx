import Button, { BookDemoButton } from "@/components/Button";
const LandingPage = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <section
      id="home"
      className="w-full md:w-[90%] lg:w-[78%] flex md:flex-row flex-col justify-between md:justify-center items-center h-screen md:h-[450px] xl:h-screen max-container xs:mt-10 sm:mt-10 md:mt-8 md:gap-0"
    >
      <div className="lg:w-2/3 w-full flex flex-col lg:gap-20 md:gap-6 gap-12 text-center md:text-left justify-center items-center md:items-start ml-0 h-[80%] md:h-full mt-6 xl:mt-0">
        <h1 className="xl:bold-64-800 md:bold-38-800 bold-26-800 mt-10 sm:mt-0 text-[#444444] whitespace-break-spaces">
          Get<span className="text-green"> Clean Data</span>
          {`\nfrom Customer & \nVendor Documents \n`}
          <span className="text-green">Automatically</span>
        </h1>

        <p className="xl:bold-28 bold-16-500 text-[#444444] md:whitespace-break-spaces w-[60%] md:w-full">
          {`Free your accounting team\nfrom manual data entry`}
        </p>
      </div>
      <div className="lg:w-1/3 w-full h-full md:h-[360px] xl:h-[420px] flex flex-col xl:justify-between md:justify-center justify-start items-center gap-5 ">
        <div className="flex w-full items-center justify-center xl:h-[300px]">
          <video
            src="./assets/HeroAnimation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="lg:w-[376px] md:w-[190px] w-[70%] mx-auto"
          />
        </div>
        <div className="flex ">
          <BookDemoButton OnClick={handleOpen} />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
