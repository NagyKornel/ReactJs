import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { NotFound } from "./NotFound";

export const Homepage = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient.get("/pizzak").then((res) => {
      setPizzak(res.data);
    });
  }, []);

  const Torles = (id: number | undefined) => {
    apiClient.delete(`/pizzak/${id}`).then(() => {
      setPizzak(pizzak.filter((v) => v.id !== id));
      toast.success("Sikeres törlés!");
    });
  };

  return (
    <>
      {pizzak ? (
        <>
          <h1 style={{ textAlign: "center" }}>Pizzák</h1>
          <Row lg={4} md={3} sm={2}>
            {pizzak.map((p) => (
              <Col>
                <Card style={{ margin: "10px" }}>
                  <Card.Img
                    style={{ height: "350px", width: "100%" }}
                    variant="top"
                    src={`${BACKEND_URL}/kepek/${p.imageUrl}`}
                  />
                  <Card.Body style={{ height: "150px" }}>
                    <Card.Title>{p.nev}</Card.Title>
                    <Card.Text>{p.leiras}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <strong>{p.ar}</strong>
                    <Button
                      style={{ float: "right" }}
                      onClick={() => Torles(p.id)}
                    >
                      Törlés
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};
