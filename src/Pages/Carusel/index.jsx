import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carusel() {
  return (
    <div>
      <div className="bg-white p-4 mt-4 rounded-[8px] ">
        <div>
          <p
            style={{
              fontFamily: "rajdhani, sans-serif",
              fontSize: "22px",
              fontWeight: "600",
              color: "#2e4765",
            }}
          >
            Carusel
          </p>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
        </Carousel>{" "}
      </div>
      <div className="bg-white p-4 mt-4 rounded-[8px] ">
        <div>
          <p
            style={{
              fontFamily: "rajdhani, sans-serif",
              fontSize: "22px",
              fontWeight: "600",
              color: "#2e4765",
            }}
          >
            Carusel
          </p>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
            <Carousel.Caption>
              <h3
                style={{
                  fontFamily: "rajdhani, sans-serif",
                }}
                className="text-black text-[20px]"
              >
                Second slide label
              </h3>
              <p className="text-gray-600 text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
            <Carousel.Caption>
              <h3
                style={{
                  fontFamily: "rajdhani, sans-serif",
                }}
                className="text-black text-[20px]"
              >
                Second slide label
              </h3>
              <p className="text-gray-600 text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
            <Carousel.Caption>
              <h3
                style={{
                  fontFamily: "rajdhani, sans-serif",
                }}
                className="text-black text-[20px]"
              >
                Second slide label
              </h3>
              <p className="text-gray-600 text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>{" "}
      </div>
      <div className="bg-white p-4 mt-4 rounded-[8px] ">
        <div>
          <p
            style={{
              fontFamily: "rajdhani, sans-serif",
              fontSize: "22px",
              fontWeight: "600",
              color: "#2e4765",
            }}
          >
            Carusel
          </p>
        </div>
        <Carousel fade>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="bg-white p-4 mt-4 rounded-[8px] ">
        <div>
          <p
            style={{
              fontFamily: "rajdhani, sans-serif",
              fontSize: "22px",
              fontWeight: "600",
              color: "#2e4765",
            }}
          >
            Carusel
          </p>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
              alt=""
            />
          </Carousel.Item>
        </Carousel>{" "}
      </div>
    </div>
  );
}

export default Carusel;
