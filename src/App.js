import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [size, setSize] = useState({ borderRadius: "20px 20px 20px 20px" });

  let randomSize = () => {
    return `${Math.floor(Math.random() * 100)}%`;
  };

  let newSize = () => {
    setSize({
      borderRadius: `${randomSize()} ${randomSize()} ${randomSize()} ${randomSize()}`,
    });
  };

  useEffect(() => {
    console.log(size);
  }, [size]);

  useEffect(() => {
    setInterval(newSize, 1000);
  }, []);

  return (
    <div className="App">
      <div className="blob" style={size} onClick={newSize}>
        <div className="circle" style={size}></div>
        <div className="circle circleTwo" style={size}></div>
      </div>
    </div>
  );
}

export default App;
