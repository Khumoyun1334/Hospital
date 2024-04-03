import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

export default function CaruselC() {
  return (
    <>
      <div className=" p-5">
        <Swiper
          loop={true}
          breakpoints={{
            425: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="swiper-my "
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div>
                <div
                  className={` bg-white p-7 py-12  shadow-[0_7px_15px_rgba(80,143,244,.15)]`}
                >
                  <div className="flex justify-center">
                    <img
                      src="https://demo.dashboardpack.com/hospital-html/img/staf/3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-center mt-4 text-[22px] text-[#2e4765] font-semibold">
                      Name
                    </p>
                    <p className="text-center text-[14px] text-[#818e94 ]">
                      Doctor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
