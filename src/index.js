import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

/*funcion*/
function Greeting() {
  const single = true;
  return <h1>{single ? "estoy soltero" : "no estoy soltero"}</h1>;
}

root.render(
  <div>
    <Greeting />
  </div>
);
