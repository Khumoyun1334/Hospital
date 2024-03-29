import React from "react";
import Dash2 from "../../components/Dash2";
import ApexChart from "../../components/BarCharts";
import CollapsibleTable from "../../components/Tablecha";
import HospitalC from "../../components/HospitalC";
import Fut from "../../components/Fut";
import BasicLineChart from "../../components/LIne";
import BasicLineChart2 from "../../components/LIne copy";
import Table from "../../components/Table";

function Dashboard2() {
  return (
    <div>
      <div>
        <Dash2 />
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

export default Dashboard2;
