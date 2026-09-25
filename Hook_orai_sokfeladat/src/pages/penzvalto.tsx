import { useRef, useState } from "react";

const penzvalto = () => {
  const inputRef = useRef(null);
  const [valuta, setValue] = useState<string>("usd");
  const [eredmeny, setEredmeny] = useState<number>(0);

  return (
    <>
      <input ref={inputRef} type="number" placeholder="500" />
      <select onChange={(v) => setValue(v.target.value)}>
        <option value="usd">Dollár</option>
        <option value="eur">Euró</option>
      </select>

      <button
        onClick={() => {
          if (valuta == "usd") setEredmeny(inputRef.current.value / 350);
          else if (valuta == "eur") setEredmeny(inputRef.current.value / 380);
        }}
      >
        Számítás
      </button>
      <p>{eredmeny.toFixed(2)}</p>
    </>
  );
};
export default penzvalto;
