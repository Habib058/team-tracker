import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';

const Home = () => {
    const [team,setTeam ] = useState([]);
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League
        `;
        fetch(url)
        .then(res =>res.json())
        .then(data => setTeam(data.teams))
    },[]);
    return (
        <div>
            <Header></Header>
            {
                team.map(team =><Teams key ={team.strAlternate} team ={team}></Teams>)
            }
        </div>
    );
};

export default Home;