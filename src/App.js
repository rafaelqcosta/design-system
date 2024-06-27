import { ListaDeLegendas } from "./components/ListaDeLegendas.tsx";

function App() {
  return (
    <div className="App">
      <ListaDeLegendas
        items={[
          { titulo: "Vermelho2", cor: "bg-red-500" },
          { titulo: "Verde", cor: "bg-green-500" },
          { titulo: "Azul", cor: "bg-blue-500" },
        ]}
      />
    </div>
  );
}

export default App;
