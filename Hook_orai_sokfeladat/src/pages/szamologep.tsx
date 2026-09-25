import { useRef, useState } from "react";

const Szamologep = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
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
          switch (muvelet) {
            case "+":
              setEredmeny(
                `${Number(inputRef1.current.value) + Number(inputRef2.current.value)}`,
              );
              break;
            case "-":
              setEredmeny(
                `${Number(inputRef1.current.value) - Number(inputRef2.current.value)}`,
              );
              break;
            case "*":
              setEredmeny(
                `${Number(inputRef1.current.value) * Number(inputRef2.current.value)}`,
              );
              break;
            case "/":
              setEredmeny(
                `${Number(inputRef1.current.value) / Number(inputRef2.current.value)}`,
              );
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
