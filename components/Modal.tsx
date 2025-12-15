import { useEffect } from "react";
import CalendlyEmbed from "./CalendlyEmbed";
const Modal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black-20 bg-opacity-80 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white px-4 md:px-8 py-8 w-[90%] md:w-[448px] h-[70%] overflow-y-auto text-[#444444]">
        <h1 className="bold-24 md:bold-36">Sign Up for a Demo</h1>
        <div className="flex flex-col mt-8">
          <p className="bold-14 md:bold-18 whitespace-break-spaces">{`Sign up to learn more about ottobooks and to\nbook a demo of the tool.`}</p>
          <div>
            <div className="w-full mt-5">
              <CalendlyEmbed />
            </div>
            <div className="flex flex-col gap-4 md:gap-5 w-full mt-12 md:mt-16">
              <button
                onClick={handleClose}
                className="border-2 border-black-20 text-black-20 px-7 h-[36px] rounded-[4px] hover:bg-black-20 hover:text-white text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
