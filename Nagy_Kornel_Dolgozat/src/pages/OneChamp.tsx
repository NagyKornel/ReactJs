import { useEffect, useState } from "react";
import type { Champ } from "../types/Champ";
import { Card, Carousel } from "react-bootstrap";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { NotFound } from "./NotFound";

export const OneChamp = () => {
  const [champs, setChamps] = useState<Champ>();

  const { id } = useParams();

  useEffect(() => {
    apiClient
      .get(`/champions/${id}`)
      .then((res) => {
        setChamps(res.data);
      })
      .catch(() => toast.error("A karakterek lekérése sikertelen volt!"));
  }, []);

  return (
    <>
      <>
        {champs ? (
          <>
            <h1 style={{ textAlign: "center" }}>{id}. champ</h1>
            <Card style={{ margin: "auto" }}>
              <Carousel interval={null}>
                {champs?.images.map((i) => (
                  <Carousel.Item>
                    <img
                      src={`${BACKEND_URL}/images/${i}`}
                      style={{
                        height: "300px",
                        width: "100%",
                      }}
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
          </>
        ) : (
          <>{<NotFound />}</>
        )}
      </>
    </>
  );
};
