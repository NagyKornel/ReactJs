import { useRef, useState } from "react";

const Szamologep = () => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const [muvelet, setMuvelet] = useState<string>("+");
  const [eredmeny, setEredmeny] = useState<string>("");

  return (
    <>
      <input ref={inputRef1} type="number" />
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
      <input ref={inputRef2} type="number" />
      <button
        onClick={() => {
          const s1 = Number(inputRef1.current?.value);
          const s2 = Number(inputRef2.current?.value);
          switch (muvelet) {
            case "+":
              setEredmeny(`${s1 + s2}`);
              break;
            case "-":
              setEredmeny(`${s1 - s2}`);
              break;
              break;
            case "*":
              setEredmeny(`${s1 * s2}`);
              break;
            case "/":
              setEredmeny(`${s1 / s2}`);
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
