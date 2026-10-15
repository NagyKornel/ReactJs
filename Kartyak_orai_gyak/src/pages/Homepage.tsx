import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import type { Pizza } from "../types/Pizza.ts";
import pizzak from "../helper/Pizzak.ts";

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

    setPizzaak((elozoPizzaak) => [...elozoPizzaak, ujPizza]);

    if (nevRef.current) nevRef.current.value = "";
    if (leirasRef.current) leirasRef.current.value = "";
    if (arRef.current) arRef.current.value = "";
    if (imgRef.current) imgRef.current.value = "";
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pizzák</h1>
      <hr />

      <Row lg={4} md={3} sm={2} xs={1} className="g-3 mx-auto">
        {pizzaak.map((pizza, index) => (
          <Col key={`${pizza.nev}-${index}`}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={pizza.img}
                style={{ height: "200px", objectFit: "cover" }}
                alt={pizza.nev}
              />

              <Card.Body>
                <Card.Title>{pizza.nev}</Card.Title>
                <Card.Text>{pizza.leiras}</Card.Text>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-between align-items-center">
                <strong>{pizza.ar} Ft</strong>
                <Button
                  variant="danger"
                  onClick={() => {
                    const ujlista = pizzaak.filter((p) => p !== pizza);
                    setPizzaak(ujlista);
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

      <div className="container mb-4">
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
            className="mb-2"
            required
          />

          <Form.Control
            ref={leirasRef}
            type="text"
            name="leiras"
            placeholder="Pizza leírása"
            className="mb-2"
            required
          />

          <Form.Control
            ref={arRef}
            type="number"
            name="ar"
            placeholder="Pizza ára (Ft)"
            min="1"
            className="mb-2"
            required
          />

          <Form.Control
            ref={imgRef}
            type="url"
            name="img"
            placeholder="Pizza kép URL"
            className="mb-3"
            required
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
