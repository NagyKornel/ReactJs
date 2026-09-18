import { useState } from "react";

const Szamologep = () => {
  const [szam1, setSzam1] = useState<number>(0);
  const [szam2, setSzam2] = useState<number>(0);
  const [muvelet, setMuvelet] = useState<string>("+");
  const [eredmeny, setEredmeny] = useState<string>("");

  return (
    <>
      <input onChange={(e) => setSzam1(Number(e.target.value))} type="number" />
      <select
        onChange={(e) => setMuvelet(String(e.target.value))}
        name="opciok"
        id="opciok"
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input onChange={(e) => setSzam2(Number(e.target.value))} type="number" />
      <button
        onClick={() => {
          switch (muvelet) {
            case "+":
              setEredmeny(`${szam1 + szam2}`);
              break;
            case "-":
              setEredmeny(`${szam1 - szam2}`);
              break;
            case "*":
              setEredmeny(`${szam1 * szam2}`);
              break;
            case "/":
              setEredmeny(`${szam1 / szam2}`);
              break;
          }
        }}
      >
        Számolás
      </button>
      <p>{eredmeny}</p>
    </>
  );
};
export default Szamologep;
