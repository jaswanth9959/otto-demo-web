import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-[280px] md:h-[150px] lg:h-[250px] bg-black-20 text-white">
      <div className="relative top-16 w-auto mx-16 hidden md:block">
        {/* <svg
          width="51"
          height="36"
          viewBox="0 0 51 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.25 10C50.25 4.478 45.7727 0 40.2516 0C34.7305 0 30.2532 4.478 30.2532 10C30.2532 12.252 30.9971 14.328 32.2529 16H20.7468V0H16.7474V16H10.6904C5.19528 16.032 0.75 20.496 0.75 26C0.75 31.504 5.22728 36 10.7484 36C16.2695 36 20.7468 31.522 20.7468 26C20.7468 23.748 20.0029 21.672 18.7471 20H30.2532V36H34.2526V20H40.2856C45.7927 19.98 50.25 15.512 50.25 10ZM16.7474 26C16.7474 29.308 14.0559 32 10.7484 32C7.44092 32 4.74935 29.308 4.74935 26C4.74935 22.692 7.44092 20 10.7484 20C14.0559 20 16.7474 22.692 16.7474 26ZM40.2516 16C36.9442 16 34.2526 13.308 34.2526 10C34.2526 6.692 36.9442 4 40.2516 4C43.5591 4 46.2506 6.692 46.2506 10C46.2506 13.308 43.5591 16 40.2516 16Z"
            fill="white"
          />
        </svg> */}
        <div className="relative xl:top-16 top-0w-full border-t-2 border-white">
          <div className="flex justify-between mt-8">
            <div className="flex justify-between gap-20">
              <p className="bold-16-350 md:bold-12 lg:bold-16-350">
                <a href="/licensing.html" target="_blank">
                  Terms
                </a>
                &nbsp;|&nbsp;
                <a href="/privacy.html" target="_blank">
                  Privacy Policy
                </a>
              </p>
              <p className="bold-16-350 md:bold-12 lg:bold-16-350">
                &copy;&nbsp;{currentYear} Parsley
              </p>
            </div>
            <div className="flex justify-between gap-8">
              <Link
                href="https://www.linkedin.com/company/ottobooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9962 15.5834V15.5827H14.9999V10.0642C14.9999 7.36449 14.4246 5.28485 11.3002 5.28485C9.79826 5.28485 8.79033 6.11746 8.37884 6.90681H8.3354V5.53689H5.37305V15.5827H8.45767V10.6084C8.45767 9.29867 8.70344 8.03221 10.3091 8.03221C11.8911 8.03221 11.9147 9.52689 11.9147 10.6924V15.5834H14.9962Z"
                    fill="#F7F7EE"
                  />
                  <path
                    d="M0.223633 5.50897H3.35796V15.3597H0.223633V5.50897Z"
                    fill="#F7F7EE"
                  />
                  <path
                    d="M1.79104 0.583435C0.802303 0.583435 0 1.382 0 2.36613C0 3.35026 0.802303 4.16552 1.79104 4.16552C2.77979 4.16552 3.58209 3.35026 3.58209 2.36613C3.58147 1.382 2.77916 0.583435 1.79104 0.583435V0.583435Z"
                    fill="#F7F7EE"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden items-center justify-center w-full h-full">
        <div className="flex flex-1 flex-col justify-evenly items-center w-full h-full space-y-6 pt-10">
          <p>
            <a href="/licensing.html" target="_blank">
              Terms
            </a>
            &nbsp;|&nbsp;
            <a href="/privacy.html" target="_blank">
              Privacy Policy
            </a>
          </p>
          <p>&copy;{currentYear} Parsley</p>
          <Link
            href="https://www.linkedin.com/company/ottobooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9962 15.5834V15.5827H14.9999V10.0642C14.9999 7.36449 14.4246 5.28485 11.3002 5.28485C9.79826 5.28485 8.79033 6.11746 8.37884 6.90681H8.3354V5.53689H5.37305V15.5827H8.45767V10.6084C8.45767 9.29867 8.70344 8.03221 10.3091 8.03221C11.8911 8.03221 11.9147 9.52689 11.9147 10.6924V15.5834H14.9962Z"
                fill="#F7F7EE"
              />
              <path
                d="M0.223633 5.50897H3.35796V15.3597H0.223633V5.50897Z"
                fill="#F7F7EE"
              />
              <path
                d="M1.79104 0.583435C0.802303 0.583435 0 1.382 0 2.36613C0 3.35026 0.802303 4.16552 1.79104 4.16552C2.77979 4.16552 3.58209 3.35026 3.58209 2.36613C3.58147 1.382 2.77916 0.583435 1.79104 0.583435V0.583435Z"
                fill="#F7F7EE"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
