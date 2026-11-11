import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Carousel, Col, Row } from "react-bootstrap";

export const Homepage = () => {
  const [filmek, setFilmek] = useState<Array<Movie>>([]);

  useEffect(() => {
    apiClient.get("/movies").then((result) => {
      setFilmek(result.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Filmek</h1>
      <Row lg={4} md={3} sm={2} style={{ margin: "auto" }}>
        {filmek.map((p) => (
          <Col style={{ margin: "auto" }}>
            <Card style={{ margin: "auto" }}>
              <Card.Body>
                <Carousel interval={null}>
                  {p.images.map((e) => (
                    <Carousel.Item>
                      <img
                        style={{ width: "400px", height: "400px" }}
                        src={`${BACKEND_URL}/images/${e}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
                  {p.genre} - {p.release_year}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>{p.price} Ft</strong>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
