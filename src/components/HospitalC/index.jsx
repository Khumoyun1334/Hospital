import React from "react";

import CaruselC from "../CarusleC";

function HospitalC() {
  const data = [
    {
      name: "Dr. Sysla J Smith",
    },
    {
      name: "Dr. Sysla J Smith",
    },
    {
      name: "Dr. Sysla J Smith",
    },
    {
      name: "Dr. Sysla J Smith",
      status: true,
    },
  ];
  return (
    <div className="bg-white mt-10 rounded-[8px] p-7">
      <div className="flex justify-between items-center">
        <div>
          <p
            style={{ fontFamily: "rajdhani, sans-serif" }}
            className="text-[26px] text-[#2e4765] font-semibold"
          >
            Hospital Survey
          </p>
        </div>
        <div className="flex gap-3">
          <button className="p-1 px-3 bg-[#EFF1F7] rounded-lg font-bold text-[21px]">
            {"<"}
          </button>
          <button className="p-1 px-3 bg-[#EFF1F7] rounded-lg font-bold text-[21px]">
            {">"}
          </button>
        </div>
      </div>
      <hr className="" />
      <CaruselC />
    </div>
  );
}

export default HospitalC;
