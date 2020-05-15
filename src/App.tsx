import React from "react";
import PokemonSearch from "./componenets/PokemonSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PokemonSearch name="John Doe" numberofPokemons={5} />
    </div>
  );
}

export default App;
