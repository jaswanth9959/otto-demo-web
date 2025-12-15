import { BookDemoButton } from "../components/Button";

const OurApplications = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <section className="flex flex-col h-full w-full justify-evenly items-center text-[#444444] bg-[#fff] text-center py-16">
      <h1 className="bold-24 md:bold-36 xl:bold-60 whitespace-break-spaces">
        {`Add Our Applications\n`}
        <span className="text-green">Supercharge Your Data</span>
      </h1>
      <div className="mt-5 md:mt-10">
        <BookDemoButton OnClick={handleOpen} />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-0 lg:gap-5 xl:gap-32 mt-10">
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col justify-evenly w-[280px] h-[347px] md:w-[332px] md:h-[278px] lg:w-[440px] lg:h-[427px] text-center mx-auto">
            <div className="w-[80%] md:w-full h-[120px] sm:h-[133px] md:h-[141px] lg:h-[248px] mx-auto mb-4 md:mb-8">
              <img
                src={"/assets/DeductionRecon.png"}
                alt="Deduction Reconciliation Image"
                className="max-h-full max-w-full object-contain mx-auto rounded-[3px] md:rounded-md shadow-[5px_6px_5px_0px_#00000059]"
              />
            </div>
            <h1 className="bold-16-500 md:bold-18-500 lg:bold-24 whitespace-break-spaces md:whitespace-normal mb-4 md:mb-8">
              {`Deduction\nManagement`}
            </h1>
            <p className="bold-16 md:bold-12-350 lg:bold-16-350 w-[60%] md:w-full lg:w-[80%] mx-auto lg:whitespace-break-spaces">
              {`Move beyond Excel to analyze backup\ndetail, dispute charges, and reconcile to\nyour GL automatically`}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col justify-evenly w-[280px] h-[347px] md:w-[332px] md:h-[278px] lg:w-[440px] lg:h-[427px] text-center mx-auto">
            <div className="w-[80%] md:w-full h-[120px] sm:h-[133px] md:h-[141px] lg:h-[248px] mx-auto mb-4 md:mb-8">
              <img
                src={"/assets/CashApplications.png"}
                alt="Cash Applications Image"
                className="max-h-full max-w-full object-contain mx-auto rounded-[3px] md:rounded-md shadow-[5px_6px_5px_0px_#00000059]"
              />
            </div>
            <h1 className="bold-16-500 md:bold-18-500 lg:bold-24 whitespace-break-spaces md:whitespace-normal mb-4 md:mb-8">
              {`Cash\nApplications`}
            </h1>
            <p className="bold-16 md:bold-12-350 lg:bold-16-350 w-[60%] md:w-full lg:w-[80%] mx-auto lg:whitespace-break-spaces">
              {`Cash Applications extrapolates from your\ncustomers remittances and converts them into\nA/R credit memos`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApplications;
