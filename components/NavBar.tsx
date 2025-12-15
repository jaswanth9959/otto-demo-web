import Link from "next/link";
import { BookDemoButton } from "./Button";

const NavBar = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <nav className="w-full flex items-center justify-between max-md:px-4 px-10 py-2 bg-[#F5F5F7] shadow-sm max-md:h-[67px] h-[92px] fixed top-0 z-20">
      <div className="hidden md:block">
        <Link href="/home">
          <img
            src="/assets/parsleyLogoLg.svg"
            alt="logo"
            className="h-[48px]"
          />
        </Link>
      </div>
      <div className="flex h-full w-full md:hidden items-center justify-start">
        <Link href="/home">
          <img src="/assets/ottobooksLogoSm.svg" alt="logo" />
        </Link>
      </div>
      <div>
        <BookDemoButton OnClick={handleOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
