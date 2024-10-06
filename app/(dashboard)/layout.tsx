import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex">
      <div className="py-6 px-3 min-w-16 max-w-[210px] w-fit lg:w-[20%]">
        <Link href="/" className="flex items-center gap-1 justify-center w-fit mx-auto">
          <Image src="/logo.png" width={32} height={32} alt="SchoolBoard" />
          <span className="text-sm font-bold hidden lg:block">SchoolBoard</span>
        </Link>
        <Menu />
      </div>
      <div className="bg-gray-100 w-full">
        a
      </div>
    </div>
  );
};

export default DashboardLayout;
