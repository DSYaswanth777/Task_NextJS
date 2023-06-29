import React from "react";

const Login = () => {
  return (
    <div className="flex justify-around h-screen items-center gap-5 ">
      <div className="flex items-center justify-center h-screen logo w-full">
        <div className="text-center text-5xl font-bold text-white">Board.</div>
      </div>

      <div className="p-48 m-40 h-full">
        <div className="login">
          <div className="w-full">
            <h2 className="text-3xl font-bold pb-2">Sign In</h2>
            <p className="pb-4 font-bold"> Sign in to your account</p>
            <div className="btn-class flex gap-5 pb-4">
              <button className="bg-white">Sigin In with Google</button>
              <button>Sigin In with Apple</button>
            </div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <a href="" className="text-blue-500">
                  Forgot Password?
                </a>{" "}
              </div>
              <div className="flex items-center justify-between">
                <button className="button p-3 rounded-xl">Sign In</button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-sm">
              Don't have an account? <a href="">Register Here</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
