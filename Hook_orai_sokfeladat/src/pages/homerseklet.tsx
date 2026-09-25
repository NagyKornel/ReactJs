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
          setFar(
            `${inputRef.current.value} C =` +
              String(Number(inputRef.current.value) * 1.8 + 32) +
              " F",
          );
          setKel(
            `${inputRef.current.value} C =` +
              String(Number(inputRef.current.value) + 273.15) +
              " K",
          );
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
