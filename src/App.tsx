import React from "react";
import "./App.css";
import landscape from "./images/image1.png";

function App() {
  return (
    <div className="App" style={styles.background}>
      <div className="Container">
        <p style={styles.title}>KidzMathicon</p>
      </div>
      <button className="Button">Start</button>
      {/* <a href="https://www.vecteezy.com/free-vector/nature">
        Nature Vectors by Vecteezy
      </a> */}
    </div>
  );
}

export default App;

const styles = {
  background: {
    backgroundImage: `url(${landscape})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
  title: {
    color: "rgb(240,224,42)",
    fontSize: "5vw",
    fontFamily: "Permanent Marker",
    textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
  },
};

// <a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/landscape">Landscape Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a>yarn
