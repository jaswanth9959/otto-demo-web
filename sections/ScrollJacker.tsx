import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import AnimatedComponent from "./AnimatedComponent";
import AnimatedComponentMobile from "./AnimatedComponentMobile";

const images = ["/slider/img-1.png", "/slider/img-2.png", "/slider/img-3.png"];
const titles = [
  "Create an AI Template",
  "Run Your Documents",
  "Export Your\nData",
];
const descriptions = [
  "Upload a sample document with your desired output and add real language business rules",
  "Run one or more similar documents against your template to generate clean data in your format of choice",
  "Export your data directly to CSV or the systems you use the most",
];

const MAX_STEP = 2;
const NAVBAR_HEIGHT_DESKTOP = 92;
const NAVBAR_HEIGHT_MOBILE = 67;

const ScrollJacker = ({ handleOpen }: { handleOpen: () => void }) => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const navHeight =
        window.innerWidth < 768 ? NAVBAR_HEIGHT_MOBILE : NAVBAR_HEIGHT_DESKTOP;
      const height = window.innerHeight - navHeight;
      if (rect.top > navHeight || Math.abs(rect.top) >= height * (MAX_STEP + 1))
        return;

      const progress = Math.min(
        Math.max((navHeight - rect.top) / height, 0),
        MAX_STEP
      );
      const stepIndex = Math.round(progress);
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] text-[#444444] pt-10 bg-[#fff]"
    >
      <div className="sticky top-[92px] max-md:top-[67px] h-[calc(100vh-92px)] max-md:h-[calc(100vh-67px)] flex flex-col justify-between items-center text-center overflow-hidden xs:py-3 sm:py-10 lg:py-6">
        <h1 className="hidden md:flex flex-wrap bold-24 md:bold-36 xl:bold-50 mb-6 w-full items-center justify-center gap-1">
          Your Data,<span>{` the Way You Want`}</span>
          <span className="block w-full">
            in <span className="text-green">Three Easy Steps</span>
          </span>
        </h1>

        <h1 className="md:hidden flex flex-col bold-24 w-full items-center justify-center gap-1">
          Your Data,<span>{` the Way You Want`}</span>
          <span className="block w-full">
            in <span className="text-green">Three Easy Steps</span>
          </span>
        </h1>

        <div className="mt-5 lg:mt-5 flex gap-4">
          {[0, 1, 2].map((step) => (
            <Button
              key={step}
              content={String(step + 1)}
              width="32px"
              height="32px"
              backgroundColor={activeStep === step ? "#B5B5B5" : "#E1E1E1"}
              textColor="#444444"
              boxShadow={"0px 3px 4px 0px #00000040 inset"}
              disabled={true}
            />
          ))}
        </div>
        <div className="relative mt-5 w-full h-full flex justify-center items-center">
          <AnimatePresence mode="wait" custom={activeStep}>
            {/* Large screens and up (lg: ≥1024px) */}
            <motion.div
              key={`lg-${activeStep}`}
              custom={activeStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex px-5"
              id="lg-screen"
            >
              <AnimatedComponent
                handleOpen={handleOpen}
                title={titles[activeStep]}
                description={descriptions[activeStep]}
                image={images[activeStep]}
              />
            </motion.div>

            {/* Medium screens and down (up to md: <1024px) */}
            <motion.div
              key={`sm-${activeStep}`}
              custom={activeStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex lg:hidden w-full h-full"
              id="sm-screen"
            >
              <AnimatedComponentMobile
                handleOpen={handleOpen}
                title={titles[activeStep]}
                description={descriptions[activeStep]}
                image={images[activeStep]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScrollJacker;
