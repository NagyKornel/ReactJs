import { Card, Carousel, Col, Row } from "react-bootstrap";
import type { Movie } from "../types/Movie";
import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";

export const Homepage = () => {
  const [filmek, setFilmek] = useState<Array<Movie>>([]);

  useEffect(() => {
    apiClient.get("/movies").then((response) => setFilmek(response.data));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Filmek</h1>
      <Row lg={4} md={3} sm={2}>
        {filmek.map((m) => (
          <Col>
            <Card>
              <Card.Body>
                <Carousel interval={null}>
                  {m.images.map((e) => (
                    <Carousel.Item>
                      <img
                        src={`${BACKEND_URL}/images/${e}`}
                        style={{
                          height: "300px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Title>
                  {m.title} - {m.release_year}
                </Card.Title>
                <Card.Text>{m.genre}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>{m.price}</strong>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
