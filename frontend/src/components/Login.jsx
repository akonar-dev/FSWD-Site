import React from "react";
import bcaLogoMini from "../assets/bcaLogoMini.png";

const Login = () => {
  return (
    <div className="absolute border border-white rounded-sm p-10 opacity-90 backdrop-blur-sm w-[50dvw] top-[10dvw] left-[24dvw] bg-[##0B001563] z-40 w-1/2vw h-3/5vh">
      <img className="mx-auto" src={bcaLogoMini} alt="bca-logo-mini" />
      <h1 className="text-white text-2xl text-center">Login to your account</h1>
      <form
        className="flex flex-col gap-5 justify-between"
        action=""
        method="post"
      >
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="border border-white rounded-sm p-2 bg-white"
          type="email"
          name=""
          id="email"
        />

        <label className="text-white" htmlFor="password">
          Password
        </label>
        <input
          className="border border-white rounded-sm p-2 bg-white"
          type="password"
          name=""
          id="password"
        />
        <div className="flex justify-between">
          <div className="flex gap-1">
            <input
              className="inline"
              type="checkbox"
              name=""
              id="remember-me"
            />
            <label className="text-white" htmlFor="remember-me">
              Remember me
            </label>
          </div>

          <a className="text-white" href="">
            Forgot Password?
          </a>
        </div>

        <input
          className="bg-[#8800FF] border rounded-sm p-2"
          type="button"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
