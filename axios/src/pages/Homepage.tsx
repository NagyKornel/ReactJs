import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Col, Row } from "react-bootstrap";

export const Homepage = () => {
  const [pizza, setPizza] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient.get("/pizzak").then((response) => {
      setPizza(response.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Axios tanulás</h1>
      <Row lg={4} md={3} sm={2}>
        {pizza.map((p) => (
          <>
            <Col>
              <Card>
                <Card.Img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} />
                <Card.Body>
                  <Card.Title>{p.nev}</Card.Title>
                  <Card.Text>{p.leiras}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <strong>{p.ar} Ft</strong>
                </Card.Footer>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};
