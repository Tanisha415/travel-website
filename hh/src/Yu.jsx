import React from "react";
import { useState } from "react";
function Yu() {
  const [n, setn] = useState(0);
  function kk() {
    setn(n + 1);
  }

  return (
    <div>
      <h1>{n}</h1>
      <button onClick={kk}>click here</button>
    </div>
  );
}

export default Yu;
