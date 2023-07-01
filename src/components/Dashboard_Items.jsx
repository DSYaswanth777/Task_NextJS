import React from "react";
import Revenue_Img from "../assets/revenue_icon.svg";
import Transcation_Img from "../assets/total_transactions_icon.svg";
import Likes_Img from "../assets/likes_icon.svg";
import Users_Img from "../assets/users_icon.svg";
import Image from "next/image";

const Dashboard_Items = () => {
  return (
    <div>
      <div className="dashboard pt-5   pr-6 Dashboard gap-10">
        <div className="bg-green p-5 rounded-2xl flex justify-between dashboard-items  gap-10">
          <div className="pt-4">
            <div
              className="text-sm"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: "400" }}
            >
              Total Revenues
            </div>
            <div
              className="text-xl font-bold"
              style={{
                fontFamily: "Opensans, sans-serif",
                fontWeight: 700,
              }}
            >
              $2,129,430
            </div>
          </div>
          <Image src={Revenue_Img} height={25} width={25}  alt=""/>
        </div>
        <div className="bg-peach p-5 rounded-2xl flex justify-between dashboard-items gap-10"  >
          <div className="pt-4">
            <div
              className="text-sm"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: "400" }}
            >
              Total Trasnscations
            </div>
            <div
              className="text-xl font-bold"
              style={{
                fontFamily: "Opensans, sans-serif",
                fontWeight: 700,
              }}
            >
              $2,129,430
            </div>
          </div>
          <Image src={Transcation_Img} height={20} width={20} alt="" />
        </div>
        <div className="bg-pink p-5 rounded-2xl flex justify-between dashboard-items gap-10"  >
          <div className="pt-4">
            <div
              className="text-sm"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: "400" }}
            >
              Total Likes
            </div>
            <div
              className="text-xl font-bold"
              style={{
                fontFamily: "Opensans, sans-serif",
                fontWeight: 700,
              }}
            >
              $2,129,430
            </div>
          </div>
          <Image src={Likes_Img} height={20} width={20} alt="" />
        </div>
        <div className="bg-lavendar p-5 rounded-2xl flex justify-between dashboard-items gap-10" >
          <div className="pt-4">
            <div
              className="text-sm"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: "400" }}
            >
              Total Users
            </div>
            <div
              className="text-xl font-bold"
              style={{
                fontFamily: "Opensans, sans-serif",
                fontWeight: 700,
              }}
            >
              $2,129,430
            </div>
          </div>
          <Image src={Users_Img} height={25} width={25} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Items;