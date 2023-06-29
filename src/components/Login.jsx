import Image from "next/image";
import React from "react";
import google from "../assets/google_icon.svg";
import apple from "../assets/apple_icon.svg";
const Login = () => {
  return (
    <div className="flex  items-center bg-background">
      <div className="flex items-center justify-center  logo w-1/3 h-screen md:flex-row">
        <div
          className="text-center text-5xl font-bold text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "72px",
            lineHeight: "87.77px",
          }}
        >
          Board.
        </div>
      </div>

      <div className="mx-auto">
        <div className="login">
          <div className="w-full">
            <h2
              className="text-3xl font-bold pb-2"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "43.88px",
              }}
            >
              Sign In
            </h2>
            <p
              className="pb-6 font-bold"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
              }}
            >
              {" "}
              Sign in to your account
            </p>
            <div className="btn-class flex gap-5 pb-4 ">
              <button
                className="bg-white social-sigin-btn rounded-md"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  color: "#858585",
                }}
              >
                {" "}
                <Image src={google} className=""></Image> &nbsp;Sigin In with
                Google
              </button>
              <button
                className="bg-white social-sigin-btn rounded-md"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  color: "#858585",
                }}
              >
                <Image src={apple}></Image>
                &nbsp;Sigin In with Apple
              </button>
            </div>
            <form className="bg-white  rounded-xl px-8 pt-6 pb-8 mb-4 ">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Email address
                </label>
                <input
                  className=" appearance-none border-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Password
                </label>
                <input
                  className=" appearance-none border-none border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                />
                <a href="" className="text-blue-500">
                  Forgot Password?
                </a>{" "}
              </div>
              <div className="flex items-center justify-between">
                <button className="button p-3 rounded-xl">Sign In</button>
              </div>
            </form>
            <p
              className="text-center text-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#858585",
                fontSize: "16px",
              }}
            >
              Don't have an account?{" "}
              <a href="" className="">
                Register Here
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
      `}</style>
    </div>
  );
};

export default Login;
