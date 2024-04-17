import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Progeress() {
  return (
    <div>
      <div className="bg-white p-4 rounded-[8px] ">
        <div>
          <p
            style={{
              fontFamily: "rajdhani, sans-serif",
              fontSize: "22px",
              fontWeight: "600",
              color: "#2e4765",
            }}
          >
            Simple Notifications
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-3">
          <ProgressBar
            className="text-right"
            variant="success"
            label={`60%`}
            now={30}
          />
          <ProgressBar variant="info" label={`60%`} now={50} />
          <ProgressBar variant="warning" label={`60%`} now={70} />
          <ProgressBar variant="danger" label={`60%`} now={100} />
        </div>
      </div>
      <div className="bg-white p-4 rounded-[8px] mt-4">
        <div>
          <p
            style={{
              fontFamily: "rajdhani, sans-serif",
              fontSize: "22px",
              fontWeight: "600",
              color: "#2e4765",
            }}
          >
            Simple Notifications
          </p>
        </div>
        <ProgressBar>
          <ProgressBar variant="success" label={`60%`} now={35} key={1} />
          <ProgressBar variant="warning" label={`60%`} now={20} key={2} />
          <ProgressBar variant="danger" label={`60%`} now={10} key={3} />
        </ProgressBar>
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
            Simple Notifications
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-3">
          <ProgressBar
            striped
            className="text-right"
            variant="success"
            label={`60%`}
            now={10}
          />
          <ProgressBar striped variant="info" label={`60%`} now={40} />
          <ProgressBar striped variant="warning" label={`60%`} now={70} />
          <ProgressBar striped variant="danger" label={`60%`} now={100} />
        </div>
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
            Simple Notifications
          </p>
        </div>
        <ProgressBar animated now={65} label={`0%`} />
      </div>
    </div>
  );
}

export default Progeress;
