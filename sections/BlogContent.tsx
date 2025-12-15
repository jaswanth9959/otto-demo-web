const BlogContent = () => {
  return (
    <section
      id="home"
      className="w-[95%] md:w-[80%] flex justify-center items-center h-full max-container mt-16 md:mt-24 xl:mt-28 tracking-wider"
    >
      <div className="lg:w-4/5 w-full flex flex-col justify-center items-center mt-6 md:mt-10">
        <h1 className="hidden md:flex xl:bold-50-700 md:bold-36 text-[#1c1c1c] whitespace-break-spaces text-center font-bold pt-4">
          {`Top Types of CPG Deductions\nand How to Manage Them`}
        </h1>
        <h1 className="md:hidden flex text-center text-[#1c1c1c] font-bold bold-24 pt-4 whitespace-break-spaces">{`Top Types of CPG\nDeductions and How\nto Manage Them`}</h1>
        <div className="items-center justify-center my-16 hidden md:flex">
          <svg
            width="50"
            height="36"
            viewBox="0 0 50 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 10C50 4.478 45.4775 0 39.9006 0C34.3237 0 29.8012 4.478 29.8012 10C29.8012 12.252 30.5526 14.328 31.8211 16H20.1988V0H16.159V16H10.0408C4.49018 16.032 0 20.496 0 26C0 31.504 4.5225 36 10.0994 36C15.6763 36 20.1988 31.522 20.1988 26C20.1988 23.748 19.4474 21.672 18.1789 20H29.8012V36H33.841V20H39.935C45.4977 19.98 50 15.512 50 10ZM16.159 26C16.159 29.308 13.4403 32 10.0994 32C6.7585 32 4.03975 29.308 4.03975 26C4.03975 22.692 6.7585 20 10.0994 20C13.4403 20 16.159 22.692 16.159 26ZM39.9006 16C36.5597 16 33.841 13.308 33.841 10C33.841 6.692 36.5597 4 39.9006 4C43.2415 4 45.9602 6.692 45.9602 10C45.9602 13.308 43.2415 16 39.9006 16Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="items-center justify-center my-10 flex md:hidden">
          <svg
            width="34"
            height="24"
            viewBox="0 0 34 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.48 6.66667C33.48 2.98533 30.4989 0 26.8228 0C23.1467 0 20.1656 2.98533 20.1656 6.66667C20.1656 8.168 20.6609 9.552 21.497 10.6667H13.8359V0H11.173V10.6667H7.14008C3.48128 10.688 0.521484 13.664 0.521484 17.3333C0.521484 21.0027 3.50258 24 7.1787 24C10.8548 24 13.8359 21.0147 13.8359 17.3333C13.8359 15.832 13.3406 14.448 12.5045 13.3333H20.1656V24H22.8285V13.3333H26.8454C30.5122 13.32 33.48 10.3413 33.48 6.66667ZM11.173 17.3333C11.173 19.5387 9.3809 21.3333 7.1787 21.3333C4.97649 21.3333 3.18437 19.5387 3.18437 17.3333C3.18437 15.128 4.97649 13.3333 7.1787 13.3333C9.3809 13.3333 11.173 15.128 11.173 17.3333ZM26.8228 10.6667C24.6206 10.6667 22.8285 8.872 22.8285 6.66667C22.8285 4.46133 24.6206 2.66667 26.8228 2.66667C29.025 2.66667 30.8171 4.46133 30.8171 6.66667C30.8171 8.872 29.025 10.6667 26.8228 10.6667Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-full xl:px-4 justify-center items-center flex">
          <img
            src="./../assets/blogs/BlogImage.jpeg"
            alt="blog"
            className="w-full hidden md:flex"
          />
          <img
            src="./../assets/blogs/BlogImageSm.jpeg"
            alt="blog"
            className="w-full flex md:hidden px-4"
          />
        </div>
        <div className="w-[92%] md:w-[100%] xl:w-[80%] flex flex-col items-start justify-start mt-8 md:mt-16 text-[#201F1F] text-left">
          <h1 className="font-bold md:bold-28 xl:bold-32 bold-18 hidden md:flex whitespace-break-spaces">
            {`Understanding the Different Types of\nDeductions and How to Manage Them`}
          </h1>
          <h1 className="font-bold text-[18px] flex md:hidden whitespace-break-spaces ">
            {`Understanding the Different\nTypes of Deductions and How\nto Manage Them`}
          </h1>
          <p className="text-[12px] md:text-[16px] xl:text-[18px] font-semibold mt-6 md:mt-12">
            If you’re a CPG brand, you’ve likely encountered various deductions
            on your payments. These deductions can eat into margins if not
            properly tracked and managed. Understanding why these deductions
            occur is the first step in optimizing your trade spend and disputing
            invalid charges.
          </p>
          <p className="text-[12px] md:text-[16px] xl:text-[18px] font-semibold mt-4 md:mt-8">
            Here’s a breakdown of the key deduction types you may see and how to
            handle them.
          </p>

          <div className="w-full mt-6 md:mt-12 text-[12px] md:text-[16px] xl:text-[18px] font-semibold">
            <h2 className="font-bold">1. Promotional Allowances</h2>
            <p className="mt-6">
              Retailers and distributors deduct funds for promotional programs,
              including:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Off-invoice promotions – Discounts applied directly to orders.
              </li>
              <li>
                Billback promotions – Retroactive deductions for previously
                agreed-upon promos.
              </li>
              <li>
                Scan-based trade spend – Fees for discounts applied at the
                retailer level.
              </li>
            </ul>
            <p className="mt-6">
              Tip: Always validate deductions against trade spend agreements to
              ensure they match what you authorized.
            </p>

            <h2 className="font-bold mt-6 md:mt-12">
              2. Chargebacks & Compliance Fees
            </h2>
            <p className="mt-6">
              These deductions result from issues with order fulfillment,
              invoicing, or compliance with vendor requirements:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Shortages – The retailer claims fewer units received than
                invoiced.
              </li>
              <li>
                Damages/Unsaleables – Products received in poor condition.
              </li>
              <li>
                Labeling & Packaging Errors – Missing barcodes, incorrect case
                pack configurations, or improper palletization.
              </li>
              <li>
                Late or Early Shipments – Deductions for shipments arriving
                outside the required delivery window.
              </li>
            </ul>
            <p className="mt-6">
              Tip: Keep thorough documentation (POs, BOLs, photos) to dispute
              invalid chargebacks.
            </p>

            <h2 className="mt-6 md:mt-12 font-bold">
              3. Freight & Logistics Fees
            </h2>
            <p className="mt-6">
              Retailers may pass along freight-related costs, such as:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Freight Compliance Charges – If shipments don’t meet the
                retailer’s routing guide.
              </li>
              <li>
                Expedited Shipping Fees – If the retailer requires urgent
                replenishment.
              </li>
            </ul>
            <p className="mt-6">
              Tip: Work with your logistics team to ensure compliance with
              retailer’s routing guidelines.
            </p>

            <h2 className="mt-6 md:mt-12 font-bold">
              4. Spoilage & Unsold Product Deductions
            </h2>
            <p className="mt-6">
              Retailers and distributors may deduct for expired, slow-moving, or
              unsold products, particularly for perishable goods or items with
              short shelf life.
            </p>
            <p className="mt-6">
              Tip: Monitor inventory movement and negotiate return policies to
              minimize losses.
            </p>
            <h2 className="mt-6 md:mt-12 font-bold">
              How to Stay on Top of Retailer and Distributor Deductions
            </h2>
            <ul className="list-disc ml-6 mt-6">
              <li>
                Categorize deductions correctly – Track them by type for better
                dispute and forecasting strategies.
              </li>
              <li>
                Validate against agreements – Ensure deductions align with trade
                spend deals.
              </li>
              <li>
                Automate deduction tracking – Manual tracking is error-prone and
                time-consuming.
              </li>
            </ul>
            <p className="mt-6 md:mt-12 hidden md:flex whitespace-break-spaces">
              {`Take Control with Ottobooks.ai. Deductions can quickly drain profits if left\nunchecked. Ottobooks.ai automates deduction reconciliation, helping CPG\nbrands track, dispute, and optimize trade spend.`}
            </p>
            <p className="mt-6 md:mt-12 flex md:hidden whitespace-break-spaces">
              {`Take Control with Ottobooks.ai. Deductions\ncan quickly drain profits if left unchecked.\nOttobooks.ai automates deduction\nreconciliation, helping CPG brands track,\ndispute, and optimize trade spend.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
