import { useEffect, useState } from "react";
import type { Champ } from "../types/Champ";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";

export const Homepage = () => {
  const [champions, setChampions] = useState<Array<Champ>>([]);

  useEffect(() => {
    apiClient
      .get("/champions")
      .then((res) => {
        setChampions(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  const torles = (id: number) => {
    apiClient.delete(`/champions/${id}`).then(() => {
      setChampions(champions.filter((v, _) => id !== v.id));
      toast.success("Sikeres Törlés!");
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>LoL champions</h1>
      <Row lg={4} md={3} sm={2} style={{ margin: "auto" }}>
        {champions.map((c) => (
          <>
            {c.blue_essence > 500 ? (
              <>
                <Col style={{ margin: "auto auto 10px auto" }}>
                  <Card style={{ margin: "auto" }}>
                    <Carousel interval={null}>
                      {c.images.map((i) => (
                        <Carousel.Item>
                          <img
                            src={`${BACKEND_URL}/images/${i}`}
                            style={{ height: "300px", width: "100%" }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <Card.Body>
                      <Card.Title>{c.name}</Card.Title>
                      <Card.Text>{c.description}</Card.Text>
                      <Card.Text>Damage type: {c.damage_type}</Card.Text>
                      <Card.Text>Lane: {c.lane}</Card.Text>
                      <Card.Text>Role: {c.role}</Card.Text>
                      <Card.Text>Blue essence: {c.blue_essence}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => torles(c.id)}>Törlés</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </>
            ) : (
              <></>
            )}
          </>
        ))}
      </Row>
    </>
  );
};
