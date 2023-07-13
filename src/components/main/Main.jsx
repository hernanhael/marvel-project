import { useState, useEffect } from "react";
import "./main.css";

export const Main = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const api = await fetch("https://swapi.dev/api/people?page=1");

        setCharacters((await api.json()).results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <ul>
        {characters.map(({ name, index }) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};
