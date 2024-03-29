import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart2() {
  return (
    <div className="bg-white w-[100%]  rounded-[8px]">
      <div>
        <div className="pt-4">
          <p className="text-[26px] w-[85%] m-auto  text-[#2e4765] font-semibold">
            Hospital Survey
          </p>
        </div>
        <div className="w-[85%] m-auto">
          <hr className="mt-5" />
        </div>
      </div>
      <LineChart
        className="xl:w-[500px]"
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            color: "#FC9F5B",
          },
        ]}
        height={300}
      />
    </div>
  );
}
