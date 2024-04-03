import React from "react";

function Fut() {
  return (
    <div>
      <div className="grid-cols-1 mt-7 gap-7 grid xl:grid-cols-2">
        <div className="bg-white p-7 rounded-[8px]">
          <div>
            <div>
              <p
                style={{ fontFamily: "rajdhani, sans-serif" }}
                className="text-[26px] text-[#2e4765] font-semibold"
              >
                Recent Activity
              </p>
            </div>
            <hr className="mt-5" />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex  gap-6">
              <div>
                <div class="w-[10px] mt-3 h-[10px] bg-[#3bb0bd] rounded-full"></div>
              </div>
              <div>
                <p className="text-[#2e4765] font-semibold">5 min ago</p>
                <p className="text-[14px] text-[#818e94] mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque
                </p>
              </div>
            </div>
            <div className="flex  gap-6">
              <div>
                <div class="w-[10px] mt-3 h-[10px] bg-[#3bb0bd] rounded-full"></div>
              </div>
              <div>
                <p className="text-[#2e4765] font-semibold">5 min ago</p>
                <p className="text-[14px] text-[#818e94] mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque
                </p>
              </div>
            </div>
            <div className="flex  gap-6">
              <div>
                <div class="w-[10px] mt-3 h-[10px] bg-[#3bb0bd] rounded-full"></div>
              </div>
              <div>
                <p className="text-[#2e4765] font-semibold">5 min ago</p>
                <p className="text-[14px] text-[#818e94] mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque
                </p>
              </div>
            </div>
            <div className="flex  gap-6">
              <div>
                <div class="w-[10px] mt-3 h-[10px] bg-[#3bb0bd] rounded-full"></div>
              </div>
              <div>
                <p className="text-[#2e4765] font-semibold">5 min ago</p>
                <p className="text-[14px] text-[#818e94] mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[350px] rounded-[8px] p-7">
          <div>
            <div>
              <p
                style={{ fontFamily: "rajdhani, sans-serif" }}
                className="text-[26px] text-[#2e4765] font-semibold"
              >
                Recent Activity
              </p>
            </div>
            <hr className="mt-5" />
          </div>
          <div className="mt-6">
            <div className="flex justify-between mt-3">
              <p className="text-[11px]">USA</p>
              <p className="text-[11px] mr-12">95%</p>
            </div>
            <div className="w-full mt-3 h-[8px] bg-[#EFF1F7] rounded-[8px]">
              <div className="w-[95%] h-full bg-[#089BAB] rounded-[8px] text-[8px]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-3">
              <p className="text-[11px]">USA</p>
              <p className="text-[11px] mr-[170px]">75%</p>
            </div>
            <div className="w-full mt-3 h-[8px] bg-[#EFF1F7] rounded-[8px]">
              <div className="w-[75%] h-full bg-[#28A745] rounded-[8px] text-[8px]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-3">
              <p className="text-[11px]">USA</p>
              <p className="text-[11px] mr-[250px]">55%</p>
            </div>
            <div className="w-full h-[8px] mt-3 bg-[#EFF1F7] rounded-[8px]">
              <div className="w-[55%] h-full bg-[#FFC107] rounded-[8px] text-[8px]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-3">
              <p className="text-[11px]">USA</p>
              <p className="text-[11px] mr-[420px]">25%</p>
            </div>
            <div className="w-full mt-3 h-[8px] bg-[#EFF1F7] rounded-[8px]">
              <div className="w-[25%] h-full bg-[#DC3545] rounded-[8px] text-[8px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fut;
