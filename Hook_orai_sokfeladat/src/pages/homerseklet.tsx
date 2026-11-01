import { useRef, useState } from "react";

const Homerseklet = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [far, setFar] = useState<string>("");
  const [kel, setKel] = useState<string>("");
  return (
    <>
      <h1>Hőmérséklet átváltó</h1>
      <input ref={inputRef} type="number" />
      <button
        onClick={() => {
          const s1 = Number(inputRef.current?.value);
          setFar(`${s1} C =` + String(s1 * 1.8 + 32) + " F");
          setKel(`${s1} C =` + String(s1 + 273.15) + " K");
        }}
      >
        Átváltás
      </button>
      <p>{far}</p>
      <p>{kel}</p>
    </>
  );
};
export default Homerseklet;
