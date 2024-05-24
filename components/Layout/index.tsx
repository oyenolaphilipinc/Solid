"use client";
import Sidebar from "@/components/Layout/Sidebar";

const DashboardWrapper = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <main>
      <main>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow ml-[280px]">
            {children}
          </div>
        </div>
      </main>
    </main>
  );
};

export default DashboardWrapper;