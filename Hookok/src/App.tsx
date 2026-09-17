import "./App.css";
import Bemutatkozas from "./Bemutatkozas";

const App = () => {
  const kor = 20;

  return (
    <>
      <h1>Hello World!</h1>
      <Bemutatkozas nev={"Valaki"} kor={kor} id={1} />
    </>
  );
};

export default App;
