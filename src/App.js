import barbell from "./assets/barbell.jpg";
import "./App.css";
import "./index.css";
import "./components/Submit.css";
import Display from "./components/Display.js";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={barbell} alt="Barbell" />
        <h2>Barbell Calculator</h2>
      </div>
      <div className="Display">
        <Display />
      </div>
    </div>
  );
}

export default App;
