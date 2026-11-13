import { useEffect, useState } from "react";
import type { Champ } from "../types/Champ";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useParams } from "react-router-dom";

export const OneChamp = () => {
  const [champs, setChamps] = useState<Champ>();

  const { id } = useParams();

  useEffect(() => {
    apiClient.get(`/champions/${id}`).then((res) => {
      setChamps(res.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{id}. champion</h1>
      <Row style={{ width: "35%", margin: "auto" }}>
        <Col style={{ margin: "auto" }}>
          <Card style={{ margin: "auto" }}>
            <Carousel interval={null}>
              {champs?.images.map((i) => (
                <Carousel.Item>
                  <img
                    src={`${BACKEND_URL}/images/${i}`}
                    style={{ height: "300px", width: "100%" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Card.Body>
              <Card.Title>{champs?.name}</Card.Title>
              <Card.Text>{champs?.description}</Card.Text>
              <Card.Text>Damage type: {champs?.damage_type}</Card.Text>
              <Card.Text>Lane: {champs?.lane}</Card.Text>
              <Card.Text>Role: {champs?.role}</Card.Text>
            </Card.Body>
            <Card.Footer>Blue essence: {champs?.blue_essence}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};
