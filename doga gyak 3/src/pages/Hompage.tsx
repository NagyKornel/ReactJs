import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";

export const Homepage = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient.get("/pizzak").then((response) => {
      setPizzak(response.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pizzák</h1>

      <Row lg={4} md={3} sm={2} xs={1}>
        {pizzak.map((p) => (
          <Col>
            <Card style={{ margin: "10px" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={`${BACKEND_URL}/kepek/${p.imageUrl}`}
                  alt={p.nev}
                />
                <Card.Title>{p.nev}</Card.Title>
                <Card.Text>{p.leiras}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>{p.ar} Ft</strong>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
