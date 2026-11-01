import { useRef, useState } from "react";

const penzvalto = () => {
  const inputRef = useRef<HTMLInputElement>(null);
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
          const s1 = Number(inputRef.current?.value);
          if (valuta == "usd") setEredmeny(s1 / 350);
          else if (valuta == "eur") setEredmeny(s1 / 380);
        }}
      >
        Számítás
      </button>
      <p>{eredmeny.toFixed(2)}</p>
    </>
  );
};
export default penzvalto;
