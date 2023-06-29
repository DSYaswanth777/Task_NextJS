import React from "react";
import Charts from "./Charts";
import Image from "next/image";

import Dashboard_Items from "./Dashboard_Items";
import Header from "./Header";
const Dashboard = () => {
  return (
    <div className="h-full w-screen">
      
      <Header />
      <Dashboard_Items />
      <Charts />
    </div>
  );
};

export default Dashboard;
