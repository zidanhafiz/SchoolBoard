import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const SidearMenu = () => {
  return (
    <div className="py-6 px-3 min-w-16 max-w-[210px] w-fit lg:w-[20%]">
      <Logo />
      <Menu />
    </div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 justify-center w-fit mx-auto"
    >
      <Image src="/logo.png" width={32} height={32} alt="SchoolBoard" />
      <span className="text-sm font-bold hidden lg:block">SchoolBoard</span>
    </Link>
  );
};

export default SidearMenu;
