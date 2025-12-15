const More = () => {
  return (
    <section className="text-[#444444] h-[500px] xl:h-[550px] flex flex-col justify-center items-center text-center gap-12 xl:gap-16 bg-[#f5f5f7] px-4 md:px-0">
      <h1 className="bold-24 md:bold-36 xl:bold-60 w-[300px] md:w-[450px] lg:w-[750px]">
        <span className="text-green">Modernize </span>Your Accounting Processes
      </h1>
      <p className="bold-12 lg:bold-16-350 w-8/12 md:w-[55%] xl:whitespace-break-spaces hidden md:block">{`We harness AI to transform accounting documents into\nstructured data and free your teams from manual data\nentry so you can work smarter, not harder`}</p>
      <p className="bold-16 w-[50%] xl:whitespace-break-spaces md:hidden block">{`We harness AI to transform accounting documents into structured data and\nfree your teams from manual data entry so you can work smarter, not harder`}</p>
      <svg
        width="86"
        height="62"
        viewBox="0 0 86 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[68px] h-[50px] md:w-[85px] md:h-[62px]"
      >
        <path
          d="M85.5 17.2222C85.5 7.71211 77.8118 0 68.3311 0C58.8504 0 51.1621 7.71211 51.1621 17.2222C51.1621 21.1007 52.4395 24.676 54.5959 27.5556H34.8379V0H27.9703V27.5556H17.5694C8.13331 27.6107 0.5 35.2987 0.5 44.7778C0.5 54.2569 8.18825 62 17.6689 62C27.1496 62 34.8379 54.2879 34.8379 44.7778C34.8379 40.8993 33.5605 37.324 31.4041 34.4444H51.1621V62H58.0297V34.4444H68.3894C77.8461 34.41 85.5 26.7151 85.5 17.2222ZM27.9703 44.7778C27.9703 50.4749 23.3484 55.1111 17.6689 55.1111C11.9895 55.1111 7.36758 50.4749 7.36758 44.7778C7.36758 39.0807 11.9895 34.4444 17.6689 34.4444C23.3484 34.4444 27.9703 39.0807 27.9703 44.7778ZM68.3311 27.5556C62.6516 27.5556 58.0297 22.9193 58.0297 17.2222C58.0297 11.5251 62.6516 6.88889 68.3311 6.88889C74.0105 6.88889 78.6324 11.5251 78.6324 17.2222C78.6324 22.9193 74.0105 27.5556 68.3311 27.5556Z"
          fill="#444444"
        />
      </svg>
    </section>
  );
};

export default More;
