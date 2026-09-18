import { useState } from "react";

const penzvalto = () => {
  const [forint, setForint] = useState<number>(0);
  const [valuta, setValue] = useState<string>("usd");
  const [eredmeny, setEredmeny] = useState<number>(0);
  return (
    <>
      <input
        onChange={(e) => setForint(Number(e.target.value))}
        type="number"
        placeholder="500"
      />
      <select onChange={(v) => setValue(v.target.value)}>
        <option value="usd">Dollár</option>
        <option value="eur">Euró</option>
      </select>

      <button
        onClick={() => {
          if (valuta == "usd") setEredmeny(forint / 350);
          else if (valuta == "eur") setEredmeny(forint / 380);
        }}
      >
        Számítás
      </button>
      <p>{eredmeny.toFixed(2)}</p>
    </>
  );
};
export default penzvalto;
