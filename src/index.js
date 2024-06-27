import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
// Importe o componente
import ListaDeLegendas from "./components/ListaDeLegendas";

// Exporte o componente para uso externo
export { ListaDeLegendas };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
