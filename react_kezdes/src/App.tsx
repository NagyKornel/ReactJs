import "./App.css";
import { Felotolt } from "./helper/feltolt";
import type { Ember } from "./types/Ember";

const App = () => {
  const Emberek: Array<Ember> = [
    { id: 1, nev: "Bela", kor: 12, nem: "ferfi" },
    { id: 2, nev: "Jancsi", kor: 13, nem: "ferfi" },
    { id: 3, nev: "Peti", kor: 14, nem: "ferfi" },
    { id: 4, nev: "Feri", kor: 15, nem: "ferfi" },
  ];

  Emberek.push({ id: 5, nev: "Rihi", kor: 67, nem: "kislány" } as Ember);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Név</td>
            <td>Kor</td>
            <td>Nem</td>
          </tr>
        </thead>
        <tbody>{Emberek.map((i) => Felotolt(i))}</tbody>
      </table>
    </>
  );
};

export default App;
