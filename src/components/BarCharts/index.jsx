import React from "react";
import ReactApexChart from "react-apexcharts";
import CountUp from "react-countup";

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Cash Flow",
          data: [
            1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09,
            0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8,
            -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6,
            -29.4, -21.4, -2.4,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: "#F15B46",
                },
                {
                  from: -45,
                  to: 0,
                  color: "#2DAAB8",
                },
              ],
            },
            columnWidth: "80%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          title: {
            text: "Growth",
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "%";
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2011-01-01",
            "2011-02-01",
            "2011-03-01",
            "2011-04-01",
            "2011-05-01",
            "2011-06-01",
            "2011-07-01",
            "2011-08-01",
            "2011-09-01",
            "2011-10-01",
            "2011-11-01",
            "2011-12-01",
            "2012-01-01",
            "2012-02-01",
            "2012-03-01",
            "2012-04-01",
            "2012-05-01",
            "2012-06-01",
            "2012-07-01",
            "2012-08-01",
            "2012-09-01",
            "2012-10-01",
            "2012-11-01",
            "2012-12-01",
            "2013-01-01",
            "2013-02-01",
            "2013-03-01",
            "2013-04-01",
            "2013-05-01",
            "2013-06-01",
            "2013-07-01",
            "2013-08-01",
            "2013-09-01",
          ],
          labels: {
            rotate: -90,
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div className="bg-white mt-9 p-7 rounded-[8px]" id="chart">
          <div>
            <div>
              <p
                style={{ fontFamily: "rajdhani, sans-serif" }}
                className="text-[26px] text-[#2e4765] font-semibold"
              >
                Hospital Survey
              </p>
            </div>
            <hr className="mt-5" />
            <div className="grid grid-cols-1 mt-7 md:grid-cols-4">
              <div>
                <p className="text-[30px] text-center font-semibold text-[#2e4765]">
                  $<CountUp end={305} duration={3} />
                </p>
                <p className="text-[14px] text-[#b2b5c0] text-center">
                  Today's Income
                </p>
              </div>
              <div>
                <p className="text-[30px] text-center font-semibold text-[#2e4765]">
                  $<CountUp end={1005} duration={3} />
                </p>
                <p className="text-[14px] text-[#b2b5c0] text-center">
                  Today's Income
                </p>
              </div>
              <div>
                <p className="text-[30px] text-center font-semibold text-[#2e4765]">
                  $<CountUp end={5505} duration={3} />
                </p>
                <p className="text-[14px] text-[#b2b5c0] text-center">
                  Today's Income
                </p>
              </div>
              <div>
                <p className="text-[30px] text-center font-semibold text-[#2e4765]">
                  $<CountUp end={155615} duration={3} />
                </p>
                <p className="text-[14px] text-[#b2b5c0] text-center">
                  Today's Income
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
