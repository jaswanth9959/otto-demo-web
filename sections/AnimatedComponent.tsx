import { BookDemoButton } from "@/components/Button";

const AnimatedComponent = ({
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
    <div className="flex flex-row gap-10 w-screen h-full items-center justify-center px-10">
      <div className="w-1/2 p-4">
        <div className="flex flex-col justify-evenly w-[445px] h-[368px] text-center mx-auto">
          <h1 className="bold-45 whitespace-break-spaces px-3 py-4">
            {title.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="bold-16-350 w-[60%] mx-auto whitespace-break-spaces h-[122px]">
            {description}
          </p>
          <div className="flex justify-center relative bottom-3">
            <BookDemoButton OnClick={handleOpen} />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div
          className={`flex aspect-video mx-auto mb-8 items-center justify-center ${
            !image.includes("img-2") ? "w-[90%]" : "w-[100%]"
          }`}
        >
          <img
            src={image}
            alt={title}
            className={`w-full h-full ${
              !image.includes("img-2")
                ? "object-fill shadow-[5px_6px_5px_0px_#00000059] rounded-md"
                : "object-contain"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedComponent;
