import { useRef, useState } from "react";

const Bmi = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [valasz, setValasz] = useState<string>("");

  return (
    <>
      <input ref={inputRef1} type="number" placeholder="testsúly(kg)" />
      <input ref={inputRef2} type="number" placeholder="magasság(cm)" />
      <button
        onClick={() => {
          const eredmeny =
            Number(inputRef1.current.value) /
            Math.pow(Number(inputRef2.current.value) / 100, 2);

          if (eredmeny <= 15.9) {
            setValasz("Súlyos soványság");
          } else if (eredmeny < 17 && eredmeny >= 16) {
            setValasz("Mérsékelt soványság");
          } else if (eredmeny < 18.5 && eredmeny >= 17) {
            setValasz("Mérsékelt soványság");
          } else if (eredmeny < 25 && eredmeny >= 18.5) {
            setValasz("Normál testsúly");
          } else if (eredmeny < 30 && eredmeny >= 25) {
            setValasz("Túlsúlyos");
          } else if (eredmeny < 35 && eredmeny >= 30) {
            setValasz("Elhízott (I. fokú)");
          } else if (eredmeny < 40 && eredmeny >= 35) {
            setValasz("Elhízott (II. fokú)");
          } else if (eredmeny > 40) {
            setValasz("Súlyosan elhízott (III. fokú)");
          } else {
            setValasz("HIBA");
          }
        }}
      >
        Számítás
      </button>

      <p>{valasz}</p>
    </>
  );
};
export default Bmi;
