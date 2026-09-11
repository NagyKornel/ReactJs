import "./App.css";
import type { Ember } from "./types/ember";

const App = () => {
  const emberek: Array<Ember> = [
    { nev: "John Doe", kor: 30, varos: "New York" },
    { nev: "Jane Smith", kor: 25, varos: "Los Angeles" },
    { nev: "Alice Jhonson", kor: 28, varos: "Chicago" },
  ];

  emberek.push({ nev: "x", kor: 15, varos: "Szeged" } as Ember);

  const generateRow = (e: Ember) => {
    return (
      <tr>
        <td>{e.nev}</td>
        <td>{e.kor}</td>
        <td>{e.varos}</td>
      </tr>
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Kor</th>
            <th>Város</th>
          </tr>
        </thead>
        <tbody>{emberek.map((i) => generateRow(i))}</tbody>
      </table>
    </>
  );
};

export default App;
