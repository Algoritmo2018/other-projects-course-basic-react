// FruitsCounter.js
import React from "react";

function FruitsCounter({ fruits }) {
  return (
    <h2>Total fruits: {fruits.length}</h2>   // length (correto)
  );
}

export default FruitsCounter;