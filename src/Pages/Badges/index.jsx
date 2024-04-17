import React from "react";
import { Badge, Button, Stack } from "react-bootstrap";

function Badges() {
  return (
    <div>
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
            Badge 1
          </p>
        </div>
        <div>
          <h2
            style={{
              fontFamily: "rajdhani, sans-serif",
              fontWeight: "700",
            }}
          >
            Example heading <Badge bg="secondary">New</Badge>
          </h2>
          <h3
            style={{
              fontFamily: "rajdhani, sans-serif",
              fontWeight: "600",
            }}
          >
            Example heading <Badge bg="secondary">New</Badge>
          </h3>
          <h5
            style={{
              fontFamily: "rajdhani, sans-serif",
            }}
          >
            Example heading <Badge bg="secondary">New</Badge>
          </h5>
          <h6
            style={{
              fontFamily: "rajdhani, sans-serif",
            }}
          >
            Example heading <Badge bg="secondary">New</Badge>
          </h6>
          <h6
            style={{
              fontFamily: "rajdhani, sans-serif",
            }}
          >
            Example heading <Badge bg="secondary">New</Badge>
          </h6>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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
              Badge 1
            </p>
          </div>
          <Button variant="primary">
            Notifactions <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
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
              Badge 1
            </p>
          </div>
          <Button variant="primary">
            Notifactions <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
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
            Badge 1
          </p>
        </div>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">Primary</Badge>
          <Badge bg="secondary">Secondary</Badge>
          <Badge bg="success">Success</Badge>
          <Badge bg="danger">Danger</Badge>
          <Badge bg="warning" text="dark">
            Warning
          </Badge>
          <Badge bg="info">Info</Badge>
          <Badge bg="light" text="dark">
            Light
          </Badge>
          <Badge bg="dark">Dark</Badge>
        </Stack>
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
            Badge 1
          </p>
        </div>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">Primary</Badge>
          <Badge bg="secondary">Secondary</Badge>
          <Badge bg="success">Success</Badge>
          <Badge bg="danger">Danger</Badge>
          <Badge bg="warning" text="dark">
            Warning
          </Badge>
          <Badge bg="info">Info</Badge>
          <Badge bg="light" text="dark">
            Light
          </Badge>
          <Badge bg="dark">Dark</Badge>
        </Stack>
      </div>
    </div>
  );
}

export default Badges;
