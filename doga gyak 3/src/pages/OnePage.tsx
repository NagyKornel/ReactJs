import { useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export const OnePage = () => {
  const { id } = useParams();
  const [pizzak, setPizzak] = useState<Pizza>();

  useEffect(() => {
    apiClient.get(`/pizzak/${id}`).then((response) => {
      setPizzak(response.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{id}. pizza a listában</h1>
      <Row lg={4} md={3} sm={2} xs={1} style={{ justifyContent: "center" }}>
        <Col>
          <Card style={{ margin: "10px" }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src={`${BACKEND_URL}/kepek/${pizzak?.imageUrl}`}
                alt={pizzak?.nev}
              />
              <Card.Title>{pizzak?.nev}</Card.Title>
              <Card.Text>{pizzak?.leiras}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <strong>{pizzak?.ar} Ft</strong>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};
