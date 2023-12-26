import logo from "./logo.svg";
import "./App.css";
import Holes from "./Holes";

function App() {
  return (
    <div className="Background">
      <h1>Guac-A-Mole</h1>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          // backgroundColor: "blue",
          width: "600px",
        }}
      >
        <p style={{ fontSize: "30px" }}>Score:0pts</p>
      </div>
      <Holes />
    </div>
  );
}

export default App;
