import { useState } from "react";

export const Penzvalto = () => {
  const [forint, setForint] = useState<number>(0);
  const [valuta, setValuta] = useState<string>("$");
  let eredmeny = 0;
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
              eredmeny = Number(forint) / 350;
              break;
            case "€":
              eredmeny = Number(forint) / 380;
              break;
          }
        }}
      >
        Átváltás
      </button>
      <p>`{eredmeny}`</p>
    </>
  );
};
export default Penzvalto;
