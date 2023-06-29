import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/components/Login";
import SideBar from "@/components/SideBar";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex bg-background h-full w-full gap-6  ">
        <SideBar />
        <Dashboard />
      </div>
      {/* <Login/> */}
    </main>
  );
}
