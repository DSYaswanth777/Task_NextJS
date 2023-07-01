import { useState } from "react";
import Dashboard_Img from "../assets/dashboard_icon.png";
import Transcations_Img from "../assets/transaction_icon.png";
import Schedule_Img from "../assets/schedule_icon.png";
import Users_Img from "../assets/user_icon.png";
import Settings_Img from "../assets/setting_icon.png";

import Image from "next/image";
import menu_Btn from "../assets/burger-menu-left.svg";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Dashboard_Img, fontWeight: 400 },
    { title: "Transctions", src: Transcations_Img, fontWeight: 400 },
    { title: "Schedules", src: Schedule_Img, fontWeight: 400 },
    { title: "Users", src: Users_Img, fontWeight: 400 },
    { title: "Settings", src: Settings_Img, fontWeight: 400 },
    { title: "Help", fontWeight: 400,gap:true },
    { title: "ContactUs", fontWeight: 400 },
  ];

  return (
    
    <div className="p-4 h-full">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
      `}</style>
      <div
        className={`${
          open ? "w-56" : "w-24"
        } bg-dark-purple p-5 relative rounded-3xl `}
      >
        <div className="flex items-center">
          {open ? (
            <h1
              className={`text-white origin-left ${
                open ? "font-bold text-3xl" : "hidden"
              }  px-5 pt-6 pb-4 cursor-pointer`}
              onClick={() => setOpen(!open)}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
              }}
            >
              Board.
            </h1>
          ) : (
            <div
              className={` ${!open && "rotate-180"} px-5 pt-6 pb-4 cursor-pointer`}
              onClick={() => setOpen(!open)}
            >
              <Image src={menu_Btn} width={30} height={30} alt="" />
            </div>
          )}
        </div>
        <ul className="p-3">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer  text-bold text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === Menus.length - 2 && "pt-64"} ${
                index === 0 && "font-extrabold"
              }`}
             
            >
              <Image src={Menu.src} />
              <span
                className={`${!open && "hidden"} origin-left  text-white`}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
