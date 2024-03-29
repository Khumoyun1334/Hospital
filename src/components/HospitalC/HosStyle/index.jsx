import React from "react";

function HosStyle({ name, status }) {
  return (
    <div>
      <div>
        <div
          className={` bg-white p-7  bg py-16  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
        >
          <div className="flex justify-center">
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
              {name}
            </p>
            <p className="text-center text-[14px] text-[#818e94 ]">Doctor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HosStyle;
