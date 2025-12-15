import { BookDemoButton } from "@/components/Button";

const AnimatedComponentMobile = ({
  handleOpen,
  title,
  description,
  image,
}: {
  handleOpen: () => void;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-evenly w-screen h-full py-3">
      <h1 className="bold-24 md:bold-36 md:whitespace-normal">{title}</h1>
      <div
        className={`flex items-center justify-center mx-auto aspect-video ${
          !image.includes("img-2") ? "w-[75%]" : "w-[50%]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className={`w-full h-full ${
            !image.includes("img-2")
              ? "object-fill shadow-[5px_6px_5px_0px_#00000059] rounded-[3px] md:rounded-md"
              : "object-contain"
          }`}
        />
      </div>
      <p className="bold-16 md:bold-24-500 w-[60%] mx-auto lg:whitespace-break-spaces">
        {description}
      </p>
      <BookDemoButton OnClick={handleOpen} />
    </div>
  );
};

export default AnimatedComponentMobile;
