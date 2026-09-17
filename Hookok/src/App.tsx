import "./App.css";
import Bemutatkozas from "./Bemutatkozas";

const App = () => {
  const kor = 20;

  return (
    <>
      <h1>Hello World!</h1>
      <Bemutatkozas nev={"Valaki"} kor={kor} />
    </>
  );
};

export default App;
