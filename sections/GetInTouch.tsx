import { BookDemoButton } from "@/components/Button";

const GetInTouch = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <section className="h-[450px] md:h-[500px] w-full bg-[#000000] text-center text-white flex flex-col items-center justify-center md:justify-between gap-10 md:gap-0 pt-8 md:pt-16 pb-8">
      <h1 className="bold-24 md:bold-36 xl:bold-60 w-[240px] sm:w-full">
        Industry Expertise
      </h1>
      <p className="bold-12 lg:bold-16 whitespace-break-spaces hidden sm:block">{`Parsley was built by a team of seasoned consumer goods accounting\nprofessionals and AI technologists from companies such as Microsoft AI, Google,\nTikTok, Hugging Face, Amazon, and Apple`}</p>
      <p className="bold-12 whitespace-break-spaces sm:hidden block w-[280px] xs:w-full">{`Parsley was built by a team\nof seasoned consumer goods\naccounting professionals and\nAI technologists from\ncompanies such as Microsoft\nAI, Google, Tik Tok, Hugging\nFace, Amazon and Apple`}</p>
      <div className="flex flex-col justify-center items-center gap-5 md:gap-12">
        <h1 className="bold-24 md:bold-36 xl:bold-60 w-[240px] sm:w-full ">
          Get in Touch
        </h1>
        <BookDemoButton OnClick={handleOpen} textColor="black" />
      </div>
    </section>
  );
};

export default GetInTouch;
