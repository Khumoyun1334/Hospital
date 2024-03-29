import React from "react";

function Forget() {
  return (
    <div>
      <div className="pb-[149px]">
        <div className=" bg-white rounded-[8px] md:p-9">
          <div className="border xl:w-[50%] lg:w-[70%] w-full m-auto rounded-[8px]">
            <div className="bg-[#F7FAFF] p-7">
              <p className="text-[22px] text-[#222222]">Login</p>
            </div>
            <div className="p-7 rounded-[8px]">
              <div className="flex flex-col gap-4 ">
                <input
                  className="w-full border outline-none p-3 rounded-[4px] text-[13px]"
                  type="text"
                  placeholder="Enter Your Email"
                />

                <button className="w-full flex items-center justify-center gap-4 border bg-[#2DAAB8] text-white p-2 rounded-[10px]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
