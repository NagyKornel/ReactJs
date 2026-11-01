import Row from "react-bootstrap/Row";
import { GenerateCard } from "../helper/GenerateCard";
import type { Character } from "../types/Character";

const Homepage = () => {
  const character: Character[] = [
    {
      id: 1,
      name: "Yaniko Satou",
      desc: "Chainsmoker",
      img: ["/img/yani/Yani_Neko_Anime.jpg", "/img/yani/Yani_Neko_Manga.jpg"],
    },
    {
      id: 2,
      name: "Yakuko Etsushimaru",
      desc: "Drug addict",
      img: ["/img/yaku/Yaku_Neko_Anime.jpg", "/img/yaku/Yaku_Neko_Manga.jpg"],
    },
    {
      id: 3,
      name: "Aruko Sakai",
      desc: "Alcoholic",
      img: ["/img/aru/Aru_Neko_Anime.jpg", "/img/aru/Aru_Neko_Manga.jpg"],
    },
    {
      id: 4,
      name: "Hameko Easygoing Anal Angel",
      desc: "Streamer",
      img: [
        "/img/hameko/Hameko_Neko_Anime.jpg",
        "/img/hameko/Hameko_Neko_Manga.jpg",
      ],
    },
    {
      id: 5,
      name: "Kaoruko Nishi",
      desc: "Comedian",
      img: [
        "/img/kaoru/Kaoru_Neko_Anime.jpg",
        "/img/kaoru/Kaoru_Neko_Manga.jpg",
      ],
    },
    {
      id: 6,
      name: "Landlord",
      desc: "Beastfolk fetishist",
      img: [
        "/img/landlord/Landlord_Anime.jpg",
        "/img/landlord/Landlord_Manga.jpg",
      ],
    },
  ];

  return (
    <>
      <Row xs={1} md={3}>
        {character.map((c) => GenerateCard(c))}
      </Row>
    </>
  );
};

export default Homepage;
