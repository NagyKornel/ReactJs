import "./App.css";
import type { Ember } from "./types/Ember";

function App() {
  const emberek: Array<Ember> = [
    { nev: "Bela", kor: 53, varos: "Szeged", nem: "Férfi" },
    { nev: "Anna", kor: 23, varos: "Budapest", nem: "Nő" },
    { nev: "János", kor: 41, varos: "Kecskemét", nem: "Férfi" },
    { nev: "Izabella", kor: 36, varos: "Csongrád", nem: "Nő" },
  ];
  const generateRow = (e: Ember) => {
    return (
      <tr>
        <td>{e.nev}</td>
        <td>{e.kor}</td>
        <td>{e.varos}</td>
        <td>{e.nem}</td>
      </tr>
    );
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Név:</td>
            <td>Kor:</td>
            <td>Város:</td>
            <td>Nem:</td>
          </tr>
        </thead>
        <tbody>{emberek.map((i) => generateRow(i))}</tbody>
      </table>
    </>
  );
}

export default App;
