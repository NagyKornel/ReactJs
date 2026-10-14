import { Button, Card, Col, Row } from "react-bootstrap";
import pizzak from "../helper/Pizzak.tsx";

const Homepage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pizzák</h1>
      <hr />

      <Row lg={4} md={3} sm={2} style={{ margin: "auto" }}>
        {pizzak.map((pizza) => (
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
                <Card.Text>{pizza.ar} Ft</Card.Text>
                <Button variant="success">Kosárba</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Homepage;
