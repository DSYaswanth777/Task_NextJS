import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
import React from "react";

const home = () => {
  return (
    <div className="" style={{ width: "99%" }}>
      <div className="flex  gap-7  ">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
};

export default home;
