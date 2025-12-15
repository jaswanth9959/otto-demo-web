"use client";
import { specializations } from "../constants/data";

const Specialization = () => {
  return (
    <>
      <div className="w-full bg-[#F1F1F1] flex flex-col items-center py-10 md:h-[520px] lg:h-[700px]">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          <h1 className="text-center bold-26-800 md:bold-36 xl:bold-60 text-[#444444] w-8/12 md:w-9/12 whitespace-break-spaces">
            {"Customizable Data Extraction from \n"}
            <span className="text-green">Thousands of Document Types</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 xl:gap-48 mt-12 md:mt-0">
            {specializations.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                text={item.text}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialization;

const Card = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) => {
  return (
    <div className="h-auto md:h-[230px] md:w-[215px] lg:h-[300px] lg:w-[330px] flex flex-col justify-between items-center py-4">
      <div className="h-[80px] w-[80px] lg:h-[140px] lg:w-[140px] flex items-center justify-center mb-6 lg:mb-8">
        <img
          src={image}
          alt="icon"
          className={`max-h-full max-w-full object-contain`}
        />
      </div>

      <div className="text-[#444444] bold-24 md:bold-16-500 lg:bold-24 mb-6 lg:mb-8 whitespace-break-spaces text-center w-[70%] md:w-full lg:w-[90%]">
        <h1>{title}</h1>
      </div>
      <div className="text-[#444444] bold-16 md:bold-12 lg:bold-16 lg:whitespace-break-spaces text-center w-[68%] md:w-full">
        <p>{text}</p>
      </div>
    </div>
  );
};
