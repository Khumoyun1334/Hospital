import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Not() {
  const [show, setShow] = useState(true);
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
        <>
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))}
        </>
      </div>
      <div className="bg-white p-4 mt-4  rounded-[8px] ">
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
        <>
          {[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert with{" "}
              <Alert.Link href="#">an example link</Alert.Link>. Give it a click
              if you like.
            </Alert>
          ))}
        </>
      </div>
      <div className="bg-white p-4 mt-4  rounded-[8px] ">
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
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </div>
      <div className="bg-white p-4 mt-4  rounded-[8px] ">
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
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </div>
    </div>
  );
}

export default Not;
