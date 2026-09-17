type Props = {
  nev: string;
  kor: number;
};

const Bemutatkozas = (props: Props) => {
  return (
    <>
      <h1>Hello {props.nev}!</h1>
      <h2>te {props.kor} éves vagy!</h2>
      {props.kor < 18 ? (
        <p style={{ color: "red" }}>Te fiatalkorú vagy!</p>
      ) : (
        <p style={{ color: "green" }}>Te felnőtt vagy!</p>
      )}
    </>
  );
};

export default Bemutatkozas;
