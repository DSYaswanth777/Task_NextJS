import Image from "next/image";
import React from "react";
import Bell from "../assets/bell_icon.svg";
import Profile from "../assets/profile_icon.svg";
const Header = () => {
  return (
    <div>
      {" "}
      <div className="flex">
        <div
          className="font-bold text-xl pt-4"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize:"24px"
          }}
        >
          DashBoard
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div
            className="pt-2 relative mx-auto text-gray-600"
            style={{ minWidth: "180px", height: "30px" }}
          >
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search..."
              style={{ border: "none" }}
            />
            <div className="absolute right-0 top-0 mt-5 mr-4 bg-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <circle cx="5" cy="5" r="4.5" stroke="#858585" />
                <line
                  x1="8.35355"
                  y1="7.64645"
                  x2="12.3536"
                  y2="11.6464"
                  stroke="#858585"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-3 pt-5">
            <Image src={Bell} height={15} width={15}></Image>
            <Image src={Profile} height={20} width={20}></Image>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
      `}</style>
    </div>
  );
};

export default Header;
