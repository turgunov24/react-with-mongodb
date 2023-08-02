import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/hey')
  })
  return null;
}

export default App;
