import { useState } from "react";
import "./App.css";

function App() {
  const [szoveg, setSzoveg] = useState<string>("");
  const [eredmeny, setEredmeny] = useState<string>("");
  const [valasztott, setValasztott] = useState<string>("");
  // a setSzoveg az egy function egy "setter fügvény" csak nincs zárójel
  return (
    <>
      <h1>Hello World</h1>
      {/* <button onClick={() => alert("Megnyomva!")}>Nyomj meg1</button>
     ha egysoros akk nem kell genyo zarojel
      <button
        onClick={() => {
          // de lehet rakni
          alert("Megnyomva2!");
        }}
      >
        Nyomj meg2
      </button>
      <button onClick={() => submit()}>Nyomj meg3</button>
      <button onClick={submit}>Nyomj meg4</button>
      nem kell az a mocskos sok genyo oda mert nincs paraméter 
      <button onClick={() => submit2("valami")}>Nyomj meg5</button> */}
      <h2>{eredmeny}</h2>
      <input
        onChange={(e) => setSzoveg(e.target.value)}
        type="text"
        placeholder="Írj be valamit..."
      />

      <button onClick={() => setEredmeny(`A megadott szöveg: ${szoveg}`)}>
        Print
      </button>

      <select onChange={(e) => setValasztott(e.target.value)}>
        <option value="">Válassz egy opciót</option>
        <option value="Első opció">Első opció</option>
        <option value="Második opció">Második opció</option>
        <option value="Harmadik opció">Harmadik opció</option>
      </select>

      <button
        onClick={() =>
          setEredmeny(
            `A megadott szöveg: ${szoveg}, A választott opció: ${valasztott}`,
          )
        }
      >
        Print
      </button>
    </>
  );
}

export default App;
