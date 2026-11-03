import { useRef, useState } from "react";
import type { Pizza } from "../types/pizza";
import { pizzak } from "../helper/Pizza";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const Homepage = () => {
  const nevRef = useRef<HTMLInputElement>(null);
  const leirasRef = useRef<HTMLInputElement>(null);
  const arRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const [pizzakasd, setpizzakasd] = useState<Array<Pizza>>(pizzak);

  const pizzaHozzaad = () => {
    const nev = nevRef.current?.value.trim();
    const leiras = leirasRef.current?.value.trim();
    const ar = Number(arRef.current?.value.trim());
    const img = imgRef.current?.value.trim();

    if (!nev || !leiras || !img || !ar) {
      toast.error("Minden mező kitöltése kötelező!");
      return;
    }

    const minar: number = 1000;

    if (ar < minar) {
      toast.error("Az árnak legalább 1000 Ft-nak kell lennie!");
      return;
    }

    const ujPizza: Pizza = {
      nev,
      leiras,
      ar,
      img,
    };

    setpizzakasd((elozo) => [...elozo, ujPizza]);
    toast.success("Pizza hozzáadva!");

    if (nevRef.current) nevRef.current.value = "";
    if (leirasRef.current) leirasRef.current.value = "";
    if (arRef.current) arRef.current.value = "";
    if (imgRef.current) imgRef.current.value = "";
  };

  const pizzaTorol = (index: number) => {
    const ujlista = pizzakasd.filter((_, i) => i !== index);
    setpizzakasd(ujlista);
    toast.success("Pizza törölve!");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pizzák</h1>
      <hr />

      <Row lg={4} md={3} sm={2} xs={1}>
        {pizzakasd.map((pizza, index) => (
          <Col>
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
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
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
                  onClick={() => pizzaTorol(index)}
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
        <h2>Pizza Hozzáadása</h2>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            pizzaHozzaad();
          }}
        >
          <Form.Control
            ref={nevRef}
            type="text"
            placeholder="Pizza neve"
            style={{ marginBottom: "10px" }}
          />
          <Form.Control
            ref={leirasRef}
            type="text"
            placeholder="Pizza leírása"
            style={{ marginBottom: "10px" }}
          />
          <Form.Control
            ref={arRef}
            type="text"
            placeholder="Pizza ára"
            style={{ marginBottom: "10px" }}
          />
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Pizza képe (URL)"
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
