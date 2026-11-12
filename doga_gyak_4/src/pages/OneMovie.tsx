import { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Movie } from "../types/Movie";
import { useParams } from "react-router-dom";

export const OneMovie = () => {
  const [filmek, setFilmek] = useState<Movie>();
  const { id } = useParams();

  useEffect(() => {
    apiClient.get(`/movies/${id}`).then((res) => {
      setFilmek(res.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Filmek</h1>
      <Row lg={4} md={3} sm={2}>
        <Col style={{ margin: "auto" }}>
          <Card>
            <Carousel interval={null}>
              {filmek?.images.map((e) => (
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
              <Card.Title>{filmek?.title}</Card.Title>
              <Card.Text>
                {filmek?.release_year} - {filmek?.genre}
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
