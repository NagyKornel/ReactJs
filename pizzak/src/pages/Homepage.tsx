import { Button } from "react-bootstrap";
import "../styles.css";
const Homepage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Vegyél mán pizzát he</h1>
      <a href="/pizzas">
        <Button
          variant="primary"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "100px",
            fontSize: "60px",
            textAlign: "center",
            lineHeight: "50%",
          }}
        >
          Jólvan na
        </Button>
      </a>
    </>
  );
};

export default Homepage;
