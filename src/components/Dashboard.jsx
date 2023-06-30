import React from "react";
import Charts from "./Charts";
import Image from "next/image";

import Dashboard_Items from "./Dashboard_Items";
import Navbar from "./Navbar";
// import Header from "./Header";
const Dashboard = () => {
  return (
    <div className="h-screen w-screen">
      
      <Navbar />
      <Dashboard_Items />
      <Charts />
    </div>
  );
};

export default Dashboard;
