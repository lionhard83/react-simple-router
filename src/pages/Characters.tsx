import React, { useEffect, useState } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { RecipeReviewCard } from '../components/Card/Card'
import { useSearchParams, useNavigate } from 'react-router-dom';
const url = "https://rickandmortyapi.com/api/character";

type RootObject = {
    results: Character[];
  }

export type Character = {
    name: string;
    image: string;
    id: number;
  }

  
export default function Characters() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') || '1';
    const name = searchParams.get('name') || '';
    const [isLoading, setLoading] = useState(false);
    const [textToSearch, setTextToSearch] = useState('');
    const [characters, setCharacters] = useState([] as Character[]);

    const loadData = async () => {
        let finalUrl = name ? `${url}?name=${name}&page=${page}` : `?page=${page}`
        const response = await fetch(finalUrl);
        const {results} = await response.json() as RootObject;
        setCharacters(results);
        console.log(results);
        setLoading(true);
      }
    
      useEffect(() => {
        setLoading(false);
        setTimeout(loadData, 100);
      }, [page, name])

    return (
        <>
            <input type='text' onChange={(ev) => setTextToSearch(ev.target.value)} ></input>
            <button onClick={() => setSearchParams({name: textToSearch})} >Cerca</button>
            <button disabled={Number(page) <= 1} onClick={() => {setSearchParams({name, page: String(Number(page) - 1)})}} >Indietro</button> 
        
            <button onClick={() => {setSearchParams({name, page: String(Number(page) + 1)})}} >Avanti</button>
            <br />
            <br />
            <br />
            <br />
            <Grid container spacing={2}>
            {  
                isLoading ? 
                characters.map((item, index) => 
                <Grid item xs={4} >
                    <RecipeReviewCard 
                    isSelected={true}
                    index={index} 
                    character={item}
                    />
                </Grid>) : <></>
            }
            </Grid>
        </>
    )
}
