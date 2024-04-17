import React from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div>
      <div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <Spinner animation="grow" />
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <div className="p-9">
            <Spinner animation="border" />
          </div>
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Loading...</p>
            <Spinner animation="border" />
          </div>
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Spinner animation="border" />
          </div>
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <div className="flex items-center">
            <Spinner animation="border" size="sm" />
            <Spinner animation="grow" size="sm" />
          </div>
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <div className="flex items-center">
            <Spinner animation="border" />
            <Spinner animation="grow" />
          </div>
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>{" "}
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />{" "}
            Loading...
          </Button>
        </div>
        <div className="bg-white mt-4 rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Border spinner
            </p>
          </div>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>{" "}
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Loading;
