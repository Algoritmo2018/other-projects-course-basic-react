// Fruits.js
import React from "react";

function Fruits({ fruits }) {   // recebe a prop fruits
  return (
    <div>
      {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
    </div>
  );
}

export default Fruits;