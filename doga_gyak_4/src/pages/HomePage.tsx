import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Carousel, Col, Row } from "react-bootstrap";

export const Homepage = () => {
  const [filmek, setFilmek] = useState<Array<Movie>>([]);

  useEffect(() => {
    apiClient.get("/movies").then((res) => {
      setFilmek(res.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Filmek</h1>
      <Row lg={4} md={3} sm={2}>
        {filmek.map((m) => (
          <Col>
            <Card style={{ margin: "10px" }}>
              <Carousel interval={null}>
                {m.images.map((e) => (
                  <Carousel.Item>
                    <img
                      src={`${BACKEND_URL}/images/${e}`}
                      style={{
                        objectFit: "cover",
                        height: "450px",
                        width: "100%",
                        margin: "auto",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{m.title}</Card.Title>
                <Card.Text>
                  {m.release_year} - {m.genre}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>{m.price} Ft</strong>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
