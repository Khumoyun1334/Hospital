import React from "react";
import Cart from "../../components/Cart";
import ApexChart from "../../components/BarCharts";
import CollapsibleTable from "../../components/Tablecha";
import HospitalC from "../../components/HospitalC";
import Fut from "../../components/Fut";
import BasicLineChart from "../../components/LIne";
import BasicLineChart2 from "../../components/LIne copy";
import Component from "../../components/Table";
import Table from "../../components/Table";
import CaruselC from "../../components/CarusleC";

function Dashboard1() {
  return (
    <div>
      <div>
        <Cart />
        <ApexChart />
        <div className="xl:flex block mt-7 gap-7">
          <div className="xl:w-[60%] w-full">
            <Table />
          </div>
          <div className="xl:w-[40%] w-full">
            <BasicLineChart />
            <BasicLineChart2 />
          </div>
        </div>
        {/* <HospitalC /> */}
        <HospitalC />
        <Fut />
      </div>
    </div>
  );
}

export default Dashboard1;
