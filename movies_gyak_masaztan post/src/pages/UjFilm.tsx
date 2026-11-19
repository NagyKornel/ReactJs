import { useState } from "react";
import { Button } from "react-bootstrap";
import type { Movie } from "../types/Movie";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

export const UjFilm = () => {
  const [filmek, setFilmek] = useState<Movie>({
    title: "",
    genre: "",
    release_year: 0,
    price: 0,
    images: ["alien_1.jpg", "alien_1.jpg"],
  });

  const Hozzaad = () => {
    apiClient
      .post("/movies", filmek)
      .then(() => {
        toast.success("Sikeres hozzáadás!");
      })
      .catch(() => {
        toast.error("Sikertelen hozzáadás!");
      });
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Új film hozzáadása</h1>
      <hr />

      <div
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          width: "600px",
          padding: "25px",
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          placeholder="Káposztaleves"
          onChange={(e) => setFilmek({ ...filmek, title: e.target.value })}
        />
        <br />
        <label>Genre:</label>
        <input
          type="text"
          placeholder="Sci-fi"
          onChange={(e) => setFilmek({ ...filmek, genre: e.target.value })}
        />
        <br />
        <label>Release year:</label>
        <input
          type="text"
          placeholder="1981"
          onChange={(e) =>
            setFilmek({ ...filmek, release_year: Number(e.target.value) })
          }
        />
        <br />
        <label>Price:</label>
        <input
          type="number"
          placeholder="6700"
          onChange={(e) =>
            setFilmek({ ...filmek, price: Number(e.target.value) })
          }
        />
        <br />
        <Button onClick={Hozzaad}>Hozzáadás</Button>
      </div>
    </>
  );
};
