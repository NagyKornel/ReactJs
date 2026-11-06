import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";

export const OnePizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();
  useEffect(() => {
    apiClient.get(`/pizzak/${id}`).then((response) => {
      setPizza(response.data);
    });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Axios tanulás</h1>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <Card>
            <Card.Img
              style={{ margin: "auto", width: "300px", height: "200px" }}
              src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`}
            />
            <Card.Body>
              <Card.Title>{pizza?.nev}</Card.Title>
              <Card.Text>{pizza?.leiras}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <strong>{pizza?.ar} Ft</strong>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};
