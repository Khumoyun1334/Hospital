import React from "react";

function CartStyle({ name, status, icon }) {
  return (
    <div>
      <div className="bg-white rounded-xl p-8 px-12 py-10 ">
        <div className="flex items-center gap-5">
          <div>
            <img src={icon} alt="" />
          </div>
          <div className="leading-8">
            <div>
              <p
                style={{ fontFamily: "rajdhani sans-serif" }}
                className="raj text-[35px] font-semibold text-[#2e4765]"
              >
                {status}
              </p>
            </div>
            <div>
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartStyle;
