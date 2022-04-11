import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Character } from './Characters';

export default function SingleCharacter() {
    const navigate = useNavigate();
    const [character, setCharacter] = useState<Character>();
    const {id} = useParams() as {id: string}
    const url = "https://rickandmortyapi.com/api/character";

    const loadData = async() => {
        const response = await fetch(`${url}/${id}`);
        const item = await response.json() as Character;
        setCharacter(item);
    }

    useEffect(() => {
        loadData();
    }, [id])

  return (
      <>
        <button onClick={() => navigate(-1)}>Torna alla lista</button>

        <div>SingleCharacter: {id}</div>
        <p>{character && character.name}</p>
      </>
    
  )
}
