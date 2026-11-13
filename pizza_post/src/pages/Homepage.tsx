import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { Button, Card, Col, Row } from "react-bootstrap";

export const Homepage = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient.get("/pizzak").then((res) => {
      setPizzak(res.data);
    });
  }, []);

  const Torles = (id: number) => {
    apiClient
      .delete(`/pizzak/${id}`)
      .then(() => setPizzak(pizzak.filter(() => id !== id)));
  };

  return (
    <>
      {pizzak ? (
        <>
          <h1 style={{ textAlign: "center" }}>Pizzák</h1>
          <Row lg={4} md={3} sm={2}>
            {pizzak.map((p) => (
              <Col>
                <Card>
                  <Card.Img src={`${p.imageUrl}`} />
                  <Card.Body>
                    <Card.Title>{p.nev}</Card.Title>
                    <Card.Text>{p.leiras}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <strong>{p.ar}</strong>
                    <Button onClick={() => Torles(p.id)}>Törlés</Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
