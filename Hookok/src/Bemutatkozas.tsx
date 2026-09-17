type Props = {
  nev: string;
  kor: number;
};

const Bemutatkozas = (props: Props) => {
  return (
    <>
      <h1>Hello {props.nev}!</h1>
      <h2>te {props.kor} éves vagy!</h2>
    </>
  );
};

export default Bemutatkozas;
