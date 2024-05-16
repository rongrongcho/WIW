import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []); // 빈 배열 추가
  return <div className="App">Test</div>;
}

export default App;
