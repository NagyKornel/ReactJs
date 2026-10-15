import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import type { Pizza } from "../types/Pizza.ts";
import pizzak from "../helper/Pizzak.ts";
import { toast } from "react-toastify";

const Homepage = () => {
  const nevRef = useRef<HTMLInputElement>(null);
  const leirasRef = useRef<HTMLInputElement>(null);
  const arRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const [pizzaak, setPizzaak] = useState<Array<Pizza>>(pizzak);

  const pizzaHozzaadasa = () => {
    const nev = nevRef.current?.value.trim();
    const leiras = leirasRef.current?.value.trim();
    const ar = Number(arRef.current?.value);
    const img = imgRef.current?.value.trim();

    const ujPizza: Pizza = {
      nev,
      leiras,
      ar,
      img,
    };
    const minar: number = 1000;
    if (ar < minar) {
      toast.error(`Az árnak legalább ${minar} Ft-nak kell lennie!`, {
        autoClose: false,
      });
    } else {
      setPizzaak((elozoPizzaak) => [...elozoPizzaak, ujPizza]);
      toast.success("Pizza hozzáadva!");
    }
    if (nevRef.current) nevRef.current.value = "";
    if (leirasRef.current) leirasRef.current.value = "";
    if (arRef.current) arRef.current.value = "";
    if (imgRef.current) imgRef.current.value = "";
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pizzák</h1>
      <hr />

      <Row lg={4} md={3} sm={2} xs={1}>
        {pizzaak.map((pizza, index) => (
          <Col key={`${pizza.nev}-${index}`}>
            <Card
              style={{
                width: 400,
                margin: "auto",
                marginBottom: "20px",
                height: "100%",
              }}
            >
              <Card.Img
                variant="top"
                src={pizza.img}
                style={{ height: "200px", objectFit: "cover", width: "100%" }}
                alt={pizza.nev}
              />

              <Card.Body>
                <Card.Title>{pizza.nev}</Card.Title>
                <Card.Text>{pizza.leiras}</Card.Text>
              </Card.Body>

              <Card.Footer>
                <strong>{pizza.ar} Ft</strong>
                <Button
                  style={{ float: "right" }}
                  variant="danger"
                  onClick={() => {
                    const ujlista = pizzaak.filter(
                      (_, index) => index !== pizzaak.indexOf(pizza),
                    );
                    setPizzaak(ujlista);
                    toast.success("Pizza törölve!");
                  }}
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <hr />

      <div style={{ maxWidth: "80%", margin: "0 auto" }}>
        <h2>Pizza hozzáadása</h2>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            pizzaHozzaadasa();
          }}
        >
          <Form.Control
            ref={nevRef}
            type="text"
            name="nev"
            placeholder="Pizza neve"
            style={{ marginBottom: "10px" }}
          />

          <Form.Control
            ref={leirasRef}
            type="text"
            name="leiras"
            placeholder="Pizza leírása"
            style={{ marginBottom: "10px" }}
          />

          <Form.Control
            ref={arRef}
            type="number"
            name="ar"
            placeholder="Pizza ára (Ft)"
            min="1"
            style={{ marginBottom: "10px" }}
          />

          <Form.Control
            ref={imgRef}
            type="url"
            name="img"
            placeholder="Pizza kép URL"
            style={{ marginBottom: "10px" }}
          />

          <Button variant="success" type="submit">
            Hozzáadás
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Homepage;
