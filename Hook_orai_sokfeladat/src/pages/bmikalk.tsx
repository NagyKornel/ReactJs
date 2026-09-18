import { useState } from "react";

const Bmi = () => {
  const [suly, setSuly] = useState<number>(0);
  const [magassag, setMagassag] = useState<number>(0);
  const [valasz, setValasz] = useState<string>("");

  return (
    <>
      <input
        onChange={(e) => setSuly(Number(e.target.value))}
        type="number"
        placeholder="testsúly(kg)"
      />
      <input
        onChange={(e) => setMagassag(Number(e.target.value))}
        type="number"
        placeholder="magasság(cm)"
      />
      <button
        onClick={() => {
          const eredmeny = suly / Math.pow(magassag / 100, 2);

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
