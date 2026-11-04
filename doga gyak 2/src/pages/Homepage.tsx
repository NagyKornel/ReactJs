import { useRef, useState } from "react";
import type { Pizza } from "../types/Pizza";
import { pizzak } from "../helper/Pizzak";
import { Button, Card, Col, Row } from "react-bootstrap";
import { GenerateCarousel } from "../helper/GenerateCarousel";
import { toast } from "react-toastify";

export const Homepage = () => {
  const [pizzakasd, setPizzakasd] = useState<Array<Pizza>>(pizzak);

  const nevRef = useRef<HTMLInputElement>(null);
  const leirasRef = useRef<HTMLInputElement>(null);
  const arRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const pizzaTorol = (index: number) => {
    const ujlista = pizzakasd.filter((_, i) => i !== index);
    setPizzakasd(ujlista);
    toast.success("Sikeres törlés!");
  };

  const minar: number = 1000;

  const pizzaHozzaad = () => {
    const ar: number = Number(arRef.current!.value);
    if (ar < minar) {
      toast.error("Az árnak legalább 1000 Ft-nak kell lennie!");
    } else {
      const ujPizza: Pizza = {
        nev: nevRef.current!.value,
        leiras: leirasRef.current!.value,
        ar: Number(arRef.current!.value),
        img: [imgRef.current!.value],
      };
      setPizzakasd([...pizzakasd, ujPizza]);
      toast.success("Sikeres hozzáadás!");
    }

    nevRef.current!.value = "";
    leirasRef.current!.value = "";
    arRef.current!.value = "";
    imgRef.current!.value = "";
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pizzák</h1>
      <hr />
      <Row lg={4} md={3} xs={2}>
        {pizzakasd.map((p, i) => (
          <Col>
            <Card style={{ width: "400px", margin: "0 auto 20px" }}>
              {GenerateCarousel(p.img)}
              <Card.Body>
                <Card.Title>{p.nev}</Card.Title>
                <Card.Text>{p.leiras}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {p.ar} Ft
                <Button
                  variant="danger"
                  style={{ float: "right" }}
                  onClick={() => {
                    pizzaTorol(i);
                  }}
                >
                  Törlés
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <div style={{ margin: "auto", width: "80%", textAlign: "center" }}>
        <h2>Pizza hozzáadása</h2>
        <input ref={nevRef} placeholder="Pizza neve" />
        <input ref={leirasRef} placeholder="Pizza leírása" />
        <input ref={arRef} placeholder="Pizza ára" />
        <input ref={imgRef} placeholder="Pizza képe (URL)" />
        <Button
          onClick={() => {
            pizzaHozzaad();
          }}
        >
          Hozzáadás
        </Button>
      </div>
    </>
  );
};
