import { Row } from "react-bootstrap";
import type { Pizza } from "../types/Pizza";
import { GenerateCard } from "../helper/GenerateCard";

const Pizzas = () => {
  const pizzak: Array<Pizza> = [
    {
      name: "Müzlis Pizza",
      desc: "Fincsi mincsi müzlikékkel társított sajtos pizza",
      img: "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/3548/live/3bf08f00-50ad-11ef-9462-ef4aa241f684.jpg",
    },
    {
      name: "AI Pizza",
      desc: "Egy csipetnyi AI-al fűszerezett sonkás pizza",
      img: "https://cdn.mos.cms.futurecdn.net/nyW6KqBPEnVyQtyJbBLuam.jpg",
    },
    {
      name: "Paradicsomos Pizza",
      desc: "Paradicsom a négyzeten",
      img: "https://images.nightcafe.studio/jobs/mgt2HLZLZDGbsurZpxRB/mgt2HLZLZDGbsurZpxRB--1--nigrd.jpg",
    },
    {
      name: "Pizza Jacuzzi",
      desc: "Élvezd ki a Pizza Jacuzzi előnyeit: Meleg és ehető",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uWxdANZJ-e8JgfYL-URO2txY-nKeSfY42gTRAylFJNJGhKwXw9Jm2_bb&s=10",
    },
    {
      name: "Fekete Pizza",
      desc: "Ellopja a pizzád",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zojuEsTqoKMGbR_Lm3rKE-nPbgtlew_xELqQ0BXpI2xsfN7XY0drWYk&s=10",
    },
    {
      name: "Orbán Pizza",
      desc: "Narancsos",
      img: "https://assets.4cdn.hu/kraken/80UeCj6HCte7WoKqs.jpeg",
    },
  ];

  return (
    <>
      <Row xs={1} md={3}>
        {pizzak.map((e) => GenerateCard(e))};
      </Row>
    </>
  );
};

export default Pizzas;
