import { useState } from "react";

export const Penzvalto = () => {
  const [forint, setForint] = useState<number>(0);
  const [valuta, setValuta] = useState<string>("$");
  const [eredmeny, setEredmeny] = useState<string>("");
  return (
    <>
      <input
        onChange={(e) => setForint(Number(e.target.value))}
        type="number"
        placeholder="500"
      />
      <select onChange={(e) => setValuta(e.target.value)}>
        <option value="$">$</option>
        <option value="€">€</option>
      </select>
      <button
        onClick={() => {
          switch (valuta) {
            case "$":
              setEredmeny(`${(Number(forint) / 350).toFixed(2)}`);
              break;
            case "€":
              setEredmeny(`${(Number(forint) / 380).toFixed(2)}`);
              break;
          }
        }}
      >
        Átváltás
      </button>
      <p>{eredmeny}</p>
    </>
  );
};
export default Penzvalto;
