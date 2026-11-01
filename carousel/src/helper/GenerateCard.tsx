import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import type { Character } from "../types/Character";
import { GenerateCarousel } from "./GenerateCarousel";

export const GenerateCard = (c: Character) => {
  return (
    <Col>
      <Card style={{ width: "18rem", margin: "auto", marginBottom: "20px" }}>
        {GenerateCarousel(c.img)}
        <Card.Body>
          <Card.Title>{c.name}</Card.Title>
          <Card.Text>{c.desc}</Card.Text>
          <a href="/">
            <Button variant="success">About</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};
