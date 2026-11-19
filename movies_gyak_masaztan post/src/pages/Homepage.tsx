import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

export const Homepage = () => {
  const [filmek, setFilmek] = useState<Array<Movie>>([]);

  useEffect(() => {
    apiClient.get("/movies").then((res) => {
      setFilmek(res.data);
    });
  }, []);

  const Torles = (id: number | undefined) => {
    apiClient.delete(`/movies/${id}`).then(() => {
      setFilmek(filmek.filter((v) => v.id !== id));
      toast.success("Sikeres Törlés!");
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Filmek</h1>
      <hr />

      <Row lg={4} md={3} sm={2}>
        {filmek.map((m) => (
          <Col>
            <Card style={{ margin: "10px" }}>
              <Carousel>
                {m.images.map((e) => (
                  <Carousel.Item>
                    <img
                      style={{ width: "100%", height: "400px" }}
                      src={`${BACKEND_URL}/images/${e}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>
                  {m.title} - {m.release_year}
                </Card.Title>
                <Card.Text>{m.genre}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>{m.price} Ft</strong>
                <Button
                  style={{ float: "right" }}
                  onClick={() => Torles(m.id)}
                  variant="danger"
                >
                  Törlés
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
