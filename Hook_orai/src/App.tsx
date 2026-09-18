import { useState } from "react";
import "./App.css";

function App() {
  const [cel, setCel] = useState<number>(0);
  const [far, setFar] = useState<string>("");
  const [kel, setKel] = useState<string>("");
  return (
    <>
      <h1>Hőmérséklet átváltó</h1>
      <input onChange={(e) => setCel(Number(e.target.value))} type="number" />
      <button
        onClick={() => {
          setFar(`${cel} C =` + String(cel * 1.8 + 32) + " F");
          setKel(`${cel} C =` + String(cel + 273.15) + " K");
        }}
      >
        Átváltás
      </button>
      <p>{far}</p>
      <p>{kel}</p>
    </>
  );
}

export default App;
