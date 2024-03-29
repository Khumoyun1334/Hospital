import React from "react";
import CountUp from "react-countup";
import DashStyle from "./DashStyle";

function Dash2() {
  const data = [
    {
      name: "Doctors",
      status: <CountUp end={520} duration={3} />,
      icon: "https://demo.dashboardpack.com/hospital-html/img/icon/man.svg",
      color: "#16BBE5",
    },
    {
      name: "Nurses",
      status: <CountUp end={6959} duration={3} />,
      icon: "https://demo.dashboardpack.com/hospital-html/img/icon/cap.svg",
      color: "#EA5D5D",
    },
    {
      name: "Potients",
      status: <CountUp end={7509} duration={3} />,
      icon: "https://demo.dashboardpack.com/hospital-html/img/icon/wheel.svg",
      color: "#FCAD73",
    },
    {
      name: "Pharmacusts",
      status: <CountUp end={2110} duration={3} />,
      icon: "https://demo.dashboardpack.com/hospital-html/img/icon/pharma.svg",
      color: "#59BCC7",
    },
  ];
  return (
    <div>
      <div className="grid xl:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        {data.map((elem, ind) => (
          <DashStyle
            key={ind + 1}
            name={elem.name}
            status={elem.status}
            icon={elem.icon}
            color={elem.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Dash2;
