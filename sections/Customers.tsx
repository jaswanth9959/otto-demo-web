"use client";

const Customers = () => {
  return (
    <>
      <section
        className="bg-black-20 h-[484px] md:h-[544px] w-full flex-col justify-center items-end text-white gap-5 md:flex hidden"
        style={{
          backgroundImage: "url('/assets/customersBgImage.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hidden md:flex justify-center items-center w-1/2 h-full">
          <div
            className="w-full h-full flex flex-col backdrop-blur-sm justify-center items-center"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              color: "#444444",
            }}
          >
            <div className="h-[2/3] md:w-2/3 lg:w-1/2 flex flex-col gap-10 pb-6 lg:pb-12 items-start justify-center">
              <svg
                width="52"
                height="37"
                viewBox="0 0 52 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_16544_10857)">
                  <path
                    d="M51.1718 7.52339L49.5301 0C37.7096 0.539689 29.5156 5.44142 29.5156 19.8565V36.4489H50.1666V15.5947H42.3455C42.3457 10.9693 45.2575 8.24891 51.1718 7.52339Z"
                    fill="#D6D6D6"
                  />
                </g>
                <g filter="url(#filter1_i_16544_10857)">
                  <path
                    d="M21.6562 7.52339L20.0145 0C8.19394 0.539689 0 5.44156 0 19.8566V36.449H20.6517V15.5947H12.8258C12.8258 10.9693 15.7377 8.24891 21.6562 7.52339Z"
                    fill="#D6D6D6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_16544_10857"
                    x="29.5156"
                    y="0"
                    width="21.6562"
                    height="39.4492"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_16544_10857"
                    />
                  </filter>
                  <filter
                    id="filter1_i_16544_10857"
                    x="0"
                    y="0"
                    width="21.6562"
                    height="39.4492"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_16544_10857"
                    />
                  </filter>
                </defs>
              </svg>

              <p className="bold-16-350 xl:bold-24-500 text-[#444444] w-full xl:w-[90%] lg:whitespace-break-spaces text-left">
                {`Parsley has completely\ntransformed the way we work.\nWe used to spend hours\nmanually sorting through\nPDFs and spreadsheets, but\nnow all of our deduction\ndetails are in one place`}
              </p>
            </div>
            <div className="h-[1/3] md:w-2/3 lg:w-1/2 flex flex-col justify-start gap-2">
              <h1 className="bold-22 lg:bold-24">Alex Anderson</h1>
              <p className="bold-16-350">
                Director of Finance / Accounting, Barnana
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="xs:flex md:hidden flex-col items-center justify-center w-full bg-black-20 text-center">
        <div className="w-full md:w-1/2 relative h-auto">
          <img
            src="./assets/customersBgImageSm.png"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 gap-8 bg-white text-[#444444]">
          <svg
            width="52"
            height="37"
            viewBox="0 0 52 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_16544_10857)">
              <path
                d="M51.1718 7.52339L49.5301 0C37.7096 0.539689 29.5156 5.44142 29.5156 19.8565V36.4489H50.1666V15.5947H42.3455C42.3457 10.9693 45.2575 8.24891 51.1718 7.52339Z"
                fill="#D6D6D6"
              />
            </g>
            <g filter="url(#filter1_i_16544_10857)">
              <path
                d="M21.6562 7.52339L20.0145 0C8.19394 0.539689 0 5.44156 0 19.8566V36.449H20.6517V15.5947H12.8258C12.8258 10.9693 15.7377 8.24891 21.6562 7.52339Z"
                fill="#D6D6D6"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_16544_10857"
                x="29.5156"
                y="0"
                width="21.6562"
                height="39.4492"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_16544_10857"
                />
              </filter>
              <filter
                id="filter1_i_16544_10857"
                x="0"
                y="0"
                width="21.6562"
                height="39.4492"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_16544_10857"
                />
              </filter>
            </defs>
          </svg>

          <p className="text-center bold-16 whitespace-break-spaces">
            {`Parsley has completely\ntransformed the way we work.\nWe used to spend hours manually\nsorting through PDFs and\nspreadsheets, but now all of our\ndeduction details are in one place`}
          </p>

          <div className="flex flex-col items-center gap-2">
            <h1 className="bold-16-500">Alex Anderson</h1>
            <p className="bold-16 whitespace-break-spaces">{`Director of Finance /\n Accounting, Barnana`}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
