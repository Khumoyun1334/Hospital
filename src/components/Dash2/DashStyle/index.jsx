import React from "react";

function DashStyle({ name, status, icon, color }) {
  return (
    <div>
      <div className="bg-white rounded-xl p-8 px-12 py-10 ">
        <div className="flex items-center justify-center gap-5">
          <div className="leading-8">
            <div>
              <p
                style={{ fontFamily: "rajdhani sans-serif" }}
                className={` raj text-[35px] font-semibold text-[${color}]`}
              >
                {status}
              </p>
            </div>
            <div>
              <p className="text-center">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashStyle;
