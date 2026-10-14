import { Button, Card, Col, Row } from "react-bootstrap";
import { useRef, useState } from "react";
import type { Pizza } from "../types/Pizza.ts";
import pizzak from "../helper/Pizzak.tsx";

const Homepage = () => {
  const nevRef = useRef<HTMLInputElement>(null);
  const leirasRef = useRef<HTMLInputElement>(null);
  const arRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const [pizzaak, setPizzaak] = useState<Array<Pizza>>(pizzak);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pizzák</h1>
      <hr />

      <Row lg={4} md={3} sm={2} style={{ margin: "auto" }}>
        {pizzaak.map((pizza) => (
          <Col key={pizza.nev}>
            <Card>
              <Card.Img
                variant="top"
                src={pizza.img}
                width={300}
                height={200}
              />
              <Card.Body>
                <Card.Title>{pizza.nev}</Card.Title>
                <Card.Text>{pizza.leiras}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>{pizza.ar} Ft</Card.Text>
                <Button variant="primary">Kosárba</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <div>
        <h2>Pizza hozzáadása</h2>
        <input
          ref={nevRef}
          type="text"
          name="nev"
          placeholder="Pizza neve"
          style={{ marginRight: "10px" }}
        />
        <input
          ref={leirasRef}
          type="text"
          name="leiras"
          placeholder="Pizza leírása"
          style={{ marginRight: "10px" }}
        />
        <input
          ref={arRef}
          type="number"
          name="ar"
          id="ar"
          placeholder="Pizza ára"
          style={{ marginRight: "10px" }}
        />
        <input
          ref={imgRef}
          type="text"
          placeholder="Pizza kép URL"
          style={{ marginRight: "10px" }}
        />
        <Button
          variant="success"
          onClick={() => {
            pizzaak.push({
              nev: nevRef.current?.value,
              leiras: leirasRef.current?.value,
              ar: Number(arRef.current?.value),
              img: imgRef.current?.value,
            });
          }}
        >
          Hozzáadás
        </Button>
      </div>
    </>
  );
};
export default Homepage;
