import { useState } from "react";
import lock from "./assets/lock.svg";
import mail from "./assets/mail.svg";
import { Router, Routes, Route } from "react-router-dom";
function App() {
  const [loginBackground, setLoginBackground] = useState(true);

  return (
    <div className="min-h-screen p-10">
      <div className="bg-gradient-to-b from-[#C0FFE1] to-[#FCFCFC] shadow-lg rounded-xl flex">
        <div className="p-16 w-1/2 flex-col justify-center items-center min-h-full">
          <div className="flex justify-center mt-24">
            <div className="login-buttons rounded-2xl bg-[#C2F1EB] h-16 flex justify-center items-center w-[30%] min-w-[200px]">
              <div className=""></div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="w-96 min-w-72 border-2 border-[#75EDD8] h-16 rounded-xl flex items-center align-middle px-10">
              <div>
                <img src={mail} alt="mail"></img>
              </div>
              <input
                className="ms-10 outline-none w-full"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mt-2 flex justify-center">
            <div className="w-96 min-w-72 border-2 border-[#75EDD8] h-16 rounded-xl flex items-center align-middle px-10">
              <div>
                <img src={lock} alt="lock"></img>
              </div>
              <input
                className="ms-10 outline-none w-full"
                placeholder="Password"
                type="password"
              />
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <div className="ps-auto">Forgot password?</div>
          </div>
          <div className="flex justify-center w-full mt-5">
            <button className="h-16 bg-gradient-to-r hover:bg-gradient-to-l transition-colors ease-in-out from-[#00DDB6] to-[#00F5CA] font-semibold w-96 min-w-72 rounded-full text-lg">
              Login
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center font-semibold">
          <div className="flex-col">
            <div className="text-7xl flex"> Welcome Back!</div>
            <div className="font-normal flex justify-center mt-5">
              Please fill you email and password to access your account.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
