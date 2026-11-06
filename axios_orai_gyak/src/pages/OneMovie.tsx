import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useParams } from "react-router-dom";
import type { Movie } from "../types/Movie";
import { Card, Carousel } from "react-bootstrap";

export const OneMovie = () => {
  const { id } = useParams();
  const [filmek, setFilmek] = useState<Movie>();

  useEffect(() => {
    apiClient.get(`/movies/${id}`).then((response) => setFilmek(response.data));
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{id}. film a listában</h1>
      <Card style={{ width: "50%", margin: "auto" }}>
        <Card.Body>
          <Carousel interval={null}>
            {filmek?.images.map((e) => (
              <Carousel.Item>
                <img
                  src={`${BACKEND_URL}/images/${e}`}
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Title>
            {filmek?.title} - {filmek?.release_year}
          </Card.Title>
          <Card.Text>{filmek?.genre}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong>{filmek?.price}</strong>
        </Card.Footer>
      </Card>
    </>
  );
};
function setFilmek(data: any): any {
  throw new Error("Function not implemented.");
}
