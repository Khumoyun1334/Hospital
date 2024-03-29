import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import React from "react";

function Login() {
  return (
    <div>
      <div className=" bg-white rounded-[8px] md:p-9">
        <div className="border xl:w-[50%] lg:w-[70%] w-full m-auto rounded-[8px]">
          <div className="bg-[#F7FAFF] p-7">
            <p className="text-[22px] text-[#222222]">Login</p>
          </div>
          <div className="p-7 rounded-[8px]">
            <div className="flex flex-col gap-4">
              <button className="w-full flex items-center text-[15px] md: justify-center gap-4 border bg-[#3B5998] text-white p-2 rounded-[10px]">
                <AiFillFacebook /> Log in with Facebook
              </button>
              <button className="w-full flex items-center justify-center text-[15px] gap-4 border bg-[#4285F4] text-white p-2 rounded-[10px]">
                <AiOutlineGoogle /> Log in with Google
              </button>
            </div>
            <div className="flex gap-5 items-center mt-4">
              <div className="border w-full h-[1px]"></div>
              <p>Or</p>
              <div className="border  w-full h-[1px]"></div>
            </div>
            <div className="flex flex-col gap-4 mt-5">
              <input
                className="w-full border outline-none p-3 rounded-[4px] text-[13px]"
                type="text"
                placeholder="Enter Your Email"
              />
              <input
                className="w-full border outline-none p-3 rounded-[4px] text-[13px]"
                type="text"
                placeholder="Password"
              />
              <button className="w-full flex items-center justify-center gap-4 border bg-[#2DAAB8] text-white p-2 rounded-[10px]">
                Log in
              </button>
              <p className="text-center mt-2">Need an account? Sign Up</p>
              <p className="text-center">Forget Password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
