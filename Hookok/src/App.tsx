import "./App.css";

function App() {
  const submit = () => {
    alert("Megnyomva3!");
  };
  const submit2 = (szoveg: string) => {
    alert(szoveg);
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => alert("Megnyomva!")}>Nyomj meg1</button>
      {/* ha egysoros akk nem kell genyo zarojel */}
      <button
        onClick={() => {
          // de lehet rakni
          alert("Megnyomva2!");
        }}
      >
        Nyomj meg2
      </button>
      <button onClick={() => submit()}>Nyomj meg3</button>
      <button onClick={submit}>Nyomj meg4</button>
      {/* nem kell az a mocskos sok genyo oda mert nincs paraméter */}
      <button onClick={() => submit2("valami")}>Nyomj meg5</button>
    </>
  );
}

export default App;
