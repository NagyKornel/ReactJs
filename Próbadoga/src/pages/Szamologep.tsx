import { useState } from "react";

export const Szamologep = () => {
  const [szam1, setSzam1] = useState<number>(0);
  const [szam2, setSzam2] = useState<number>(0);
  const [muvelet, setMuvelet] = useState<string>("+");
  const [eredmeny, setEredmeny] = useState<string>("");
  return (
    <>
      <input
        onChange={(e) => setSzam1(Number(e.target.value))}
        type="number"
        placeholder="5"
      />
      <select onChange={(e) => setMuvelet(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        onChange={(e) => setSzam2(Number(e.target.value))}
        type="number"
        placeholder="5"
      />
      <button
        onClick={() => {
          switch (muvelet) {
            case "+":
              setEredmeny(`${Number(szam1) + Number(szam2)}`);
              break;
            case "-":
              setEredmeny(`${Number(szam1) - Number(szam2)}`);
              break;
            case "*":
              setEredmeny(`${Number(szam1) * Number(szam2)}`);
              break;
            case "/":
              setEredmeny(`${(Number(szam1) / Number(szam2)).toFixed(2)}`);
              break;
          }
        }}
      >
        Számol!
      </button>
      <p>{eredmeny}</p>
    </>
  );
};
export default Szamologep;
