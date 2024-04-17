import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Buttons() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

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
            Buttons
          </p>
        </div>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
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
            Buttons
          </p>
        </div>
        <Button href="#">Link</Button> <Button type="submit">Button</Button>{" "}
        <Button as="input" type="button" value="Input" />{" "}
        <Button as="input" type="submit" value="Submit" />{" "}
        <Button as="input" type="reset" value="Reset" />
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
            Buttons
          </p>
        </div>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button>{" "}
        <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="outline-dark">Dark</Button>
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
            Buttons
          </p>
        </div>
        <div className="">
          <Button variant="primary" size="lg">
            Large button
          </Button>{" "}
          <Button variant="secondary" size="lg">
            Large button
          </Button>
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
            Buttons
          </p>
        </div>
        <div className="">
          <Button variant="primary" size="sm">
            Small button
          </Button>{" "}
          <Button variant="secondary" size="sm">
            Small button
          </Button>
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
            Buttons
          </p>
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Block level button
          </Button>
          <Button variant="secondary" size="lg">
            Block level button
          </Button>
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
            Buttons
          </p>
        </div>
        <div className="">
          <Button variant="primary" size="lg" active>
            Primary button
          </Button>{" "}
          <Button variant="secondary" size="lg" active>
            Button
          </Button>
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
            Buttons
          </p>
        </div>
        <div className="">
          <Button variant="primary" size="lg" disabled>
            Primary button
          </Button>{" "}
          <Button variant="secondary" size="lg" disabled>
            Button
          </Button>{" "}
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
            Buttons
          </p>
        </div>
        <div className="">
          <Button variant="primary">Single Bottom</Button>
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
            Buttons
          </p>
        </div>
        <div className="">
          <ToggleButton
            className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            Checked
          </ToggleButton>
          <br />
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-success" : "outline-danger"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
