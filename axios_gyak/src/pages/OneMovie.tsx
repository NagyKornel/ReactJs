import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const OneMovie = () => {
  const [filmek, setFilmek] = useState<Movie>();
  const { id } = useParams();

  useEffect(() => {
    apiClient.get(`/movies/${id}`).then((result) => {
      setFilmek(result.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Filmek</h1>
      <Row lg={4} md={3} sm={2}>
        <Col style={{ margin: "auto" }}>
          <Card style={{ margin: "auto" }}>
            <Card.Body>
              <Carousel interval={null}>
                {filmek?.images.map((e) => (
                  <Carousel.Item>
                    <img
                      style={{ width: "400px", height: "400px" }}
                      src={`${BACKEND_URL}/images/${e}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Title>{filmek?.title}</Card.Title>
              <Card.Text>
                {filmek?.genre} - {filmek?.release_year}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <strong>{filmek?.price} Ft</strong>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};
