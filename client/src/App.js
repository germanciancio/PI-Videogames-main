import "./App.css";
import Landing from "./Landing/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={"hey"} />
      </Routes>
    </div>
  );
}

export default App;
