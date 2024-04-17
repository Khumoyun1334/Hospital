import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/CardGroup";

function Cards() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4">
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
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="bg-white p-4 h-[170px] mt-4 rounded-[8px] ">
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
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white h-[335px] p-4 mt-4 rounded-[8px] ">
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
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
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
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="bg-white p-4  mt-4 rounded-[8px] ">
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
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="bg-white p-4  mt-4 rounded-[8px] ">
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
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="bg-white p-4  mt-4 rounded-[8px] ">
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
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
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
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
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
          <Card>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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
          <Card>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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
            Carusel
          </p>
        </div>
        <Card style={{ width: "100%" }}>
          <Card.Img
            variant="top"
            src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
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
        <Card style={{ width: "100%" }}>
          <Card.Img
            variant="top"
            src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
          />
        </Card>
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
        <>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
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
        <>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Success Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="danger" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Danger Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="warning" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Warning Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="info" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Info Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="dark" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Dark Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="light" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Light Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
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
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
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
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://demo.dashboardpack.com/hospital-html/img/banner.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Cards;
