import React from "react";
import HosStyle from "./HosStyle";

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
      <div>
        <div>
          <p className="text-[26px] text-[#2e4765] font-semibold">
            Hospital Survey
          </p>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="grid grid-cols-2 py-7 mt-6 gap-7 md:grid-cols-3 xl:grid-cols-4">
        {data.map((elem, ind) => (
          <HosStyle key={ind + 1} name={elem.name} status={elem.status} />
        ))}
      </div>
    </div>
  );
}

export default HospitalC;
