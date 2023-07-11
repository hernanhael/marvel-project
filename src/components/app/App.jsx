import { Header } from "../header/Header";
import { useState, useEffect } from "react";
import "./app.css";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const API = await fetch("https://swapi.dev/api/people?page=1");

      setCharacters((await API.json()).results);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <Header />
      <ul>
        {characters.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
