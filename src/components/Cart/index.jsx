import React from "react";
import CartStyle from "./CartStyle";
import CountUp from "react-countup";

function Cart() {
  const data = [
    {
      name: "Doctors",
      status: <CountUp end={520} duration={3} />,
      icon: "https://demo.dashboardpack.com/hospital-html/img/icon/man.svg",
    },
    {
      name: "Nurses",
      status: <CountUp end={6959} duration={3} />,
      icon: "https://demo.dashboardpack.com/hospital-html/img/icon/cap.svg",
    },
    {
      name: "Potients",
      status: <CountUp end={7509} duration={3} />,
      icon: "https://demo.dashboardpack.com/hospital-html/img/icon/wheel.svg",
    },
    {
      name: "Pharmacusts",
      status: <CountUp end={2110} duration={3} />,
      icon: "https://demo.dashboardpack.com/hospital-html/img/icon/pharma.svg",
    },
  ];
  return (
    <div>
      <div className="grid xl:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {data.map((elem, ind) => (
          <CartStyle
            key={ind + 1}
            name={elem.name}
            status={elem.status}
            icon={elem.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
