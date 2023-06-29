import { useState } from "react";
import Dashboard_Img from "../assets/dashboard_icon.png";
import Transcations_Img from "../assets/transaction_icon.png";
import Schedule_Img from "../assets/schedule_icon.png";
import Users_Img from "../assets/user_icon.png";
import Settings_Img from "../assets/setting_icon.png";
import Image from "next/image";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Dashboard_Img, fontWeight: 400 },
    { title: "Transctions", src: Transcations_Img, fontWeight: 400 },
    { title: "Schedules", src: Schedule_Img, fontWeight: 400 },
    { title: "Users", src: Users_Img, fontWeight: 400 },
    { title: "Settings", src: Settings_Img, fontWeight: 400 },
  ];

  return (
    <div className="p-4 h-full">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
      `}</style>
      <div
        className={`${
          open ? "w-42" : "w-24"
        } bg-dark-purple p-5 relative duration-300 rounded-3xl h-full`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center">
          <h1
            className={`text-white origin-left ${
              open ? "font-bold text-3xl" : "font-normal text-xl"
            } duration-200 px-5 pt-6`}
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
            }}
          >
            Board.
          </h1>
        </div>
        <ul className="p-3">
          {Menus.map((Menu, index) => (
             <li
             key={index}
             className={`flex  rounded-md p-2 cursor-pointer text-bold text-gray-300 text-sm items-center gap-x-4 
             ${Menu.gap ? "mt-9" : "mt-2"} ${
               index === 0 && "font-extrabold"
             } `}
           >
              <Image src={Menu.src} />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-white`}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {Menu.title}
              </span>
            </li>
          ))}
          <div className="pt-40">
            <div
              className="text-white pt-20 px-2 text-sm"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Help
            </div>
            <div
              className="text-white pt-3 px-2 text-sm"
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Contact Us
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
