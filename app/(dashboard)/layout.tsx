import Navbar from "@/components/Navbar";
import SidearMenu from "@/components/SidebarMenu";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex">
      <SidearMenu />
      <div className="bg-slate-50 w-full px-3 py-6">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
