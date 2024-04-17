import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";

function DropDown() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="bg-white rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Dropdown 1
            </p>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="bg-white rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Dropdown 1
            </p>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="bg-white rounded-[8px] p-4">
          <div>
            <p
              style={{
                fontFamily: "rajdhani, sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: "#2e4765",
              }}
            >
              Dropdown 1
            </p>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
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
              Dropdown 1
            </p>
          </div>
          <div className="flex gap-2">
            {[
              "Primary",
              "Secondary",
              "Success",
              "Info",
              "Warning",
              "Danger",
            ].map((variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ))}
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
              Dropdown 1
            </p>
          </div>
          <div className="flex gap-2">
            {[
              "Primary",
              "Secondary",
              "Success",
              "Info",
              "Warning",
              "Danger",
            ].map((variant) => (
              <SplitButton
                key={variant}
                id={`dropdown-split-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </SplitButton>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-4">
          <div className="bg-white rounded-[8px] p-4">
            <div>
              <p
                style={{
                  fontFamily: "rajdhani, sans-serif",
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#2e4765",
                }}
              >
                Dropdown 1
              </p>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="bg-white rounded-[8px] p-4">
            <div>
              <p
                style={{
                  fontFamily: "rajdhani, sans-serif",
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#2e4765",
                }}
              >
                Dropdown 1
              </p>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
