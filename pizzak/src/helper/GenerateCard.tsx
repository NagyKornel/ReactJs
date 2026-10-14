import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import type { Pizza } from "../types/Pizza";
import { Col } from "react-bootstrap";

export const GenerateCard = (p: Pizza) => {
  return (
    <Col>
      <Card style={{ width: "18rem", margin: "auto", marginBottom: "20px" }}>
        <Card.Img variant="top" src={p.img} width={1500} height={200} />
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Text>{p.desc}</Card.Text>
          <a href="/cart">
            <Button variant="success">Kosárba</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};
