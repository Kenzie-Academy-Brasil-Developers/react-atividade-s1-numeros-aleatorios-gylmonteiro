import "./index.css";
import { useState } from "react";

const Random = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const newRandom = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={newRandom}>Change Number</button>
    </div>
  );
};

export default Random;
