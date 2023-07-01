import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../redux/actions/authActions";
import { useRouter } from "next/router";
import google from "../assets/google_icon.svg";
import apple from "../assets/apple_icon.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignIn = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    dispatch(signIn(credentials)).then(() => {
      // Redirect to the home route on successful sign-in
      router.push("/home");
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(signUp(userData));
  };

  const handleToggleSignUp = () => {
    setIsSigningUp(!isSigningUp);
  };

  const handleSignInWithGoogle = () => {
    const config = {
      client_id: "330809361538-5r8ep82qmtg9mtjrvk8hs1ahapotvvsn.apps.googleusercontent.com",
      ux_mode: "redirect",
      redirect_uri: "https://verdant-licorice-316590.netlify.app/home",
    };

    window.google.accounts.id.initialize(config);
    window.google.accounts.id.prompt();
  };

  useEffect(() => {
    const handleGoogleSignInCallback = (response) => {
      const { credential } = response;
      const user = credential;
      console.log(user);
      router.push("/home");
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.handleGoogleSignInCallback = handleGoogleSignInCallback;

    return () => {
      document.head.removeChild(script);
      delete window.handleGoogleSignInCallback;
    };
  }, []);

  return (
    <div className="items-center bg-background flex gap-5 flex flex-col md:flex-row">
      <div className="flex items-center justify-center logo h-screen w-full md:w-1/3 xs:w-max-full">
        <div
          className="text-center text-5xl font-bold text-white transform rotate-90 sm:rotate-0 board"
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
        <div className="login pl-4">
          <div className="w-full">
            <h2
              className="text-3xl font-bold pb-2 pt-32 transform rotate-90 sm:rotate-0 "
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "43.88px",
              }}
            >
              {isSigningUp ? "Sign Up" : "Sign In"}
            </h2>
            <p
              className="pb-6 font-bold"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
              }}
            >
              {isSigningUp ? "Sign up for an account" : "Sign in to your account"}
            </p>
            <div className="btn-class flex gap-5 pb-4">
              <button
                className="bg-white social-sigin-btn rounded-md"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  color: "#858585",
                }}
                onClick={() =>{
                  handleSignInWithGoogle()
                  router.push("/home")
                }}
        
              >
                <Image src={google} alt="" className="" /> &nbsp;Sign In with Google
              </button>
              <button
                className="bg-white social-sigin-btn rounded-md"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  color: "#858585",
                }}
              >
                <Image src={apple} alt="" /> &nbsp;Sign In with Apple
              </button>
            </div>
            <form className="bg-white rounded-xl px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Email address
                </label>
                <input
                  className="appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Password
                </label>
                <input
                  className="appearance-none border-none border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a href="#" className="text-blue-500">
                  Forgot Password?
                </a>{" "}
              </div>
              <div className="flex flex-col items-center justify-between gap-5 transform rotate-90 sm:rotate-0 ">
                <button
                  className="button p-3 rounded-xl cursor-pointer"
                  onClick={isSigningUp ? handleSignUp : handleSignIn}
                >
                  {isSigningUp ? "Sign Up" : "Sign In"}
                </button>
              </div>
            </form>
            <p
              className="text-center text-sm pb-3"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#858585",
                fontSize: "16px",
              }}
            >
              {isSigningUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <a href="#" className="" onClick={handleToggleSignUp}>
                {isSigningUp ? "Sign In Here" : "Register Here"}
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
