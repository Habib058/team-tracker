import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import css from './TeamDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons'

const TeamDetails = () => {
    const { teamName } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    const { strTeamBadge, strTeamFanart1,strAlternate,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strTeamFanart2 } = teamDetails;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [teamName]);
    return (
        <div>
            <Header teamLogo={strTeamBadge}></Header><br />
            <div className='detailsContent' >
                <div className="details">
                    <h3> {strAlternate}</h3>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars}/> Gender: {strGender}</p>
                </div>
                <div className="image">
                {
                    strGender==='male'? <img style={{width:'600px',height:'250px'}} src={strTeamFanart1} alt="" /> : <img style={{width:'600px',height:'250px'}} src={strTeamFanart2} alt="" />
                }
                </div>
            </div>
            <div  className='textContent'>
                <p><b>{strDescriptionEN}</b></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et dignissimos cumque? Ipsam asperiores enim eaque cum, ab dolorum deleniti ut quasi atque illo omnis amet id pariatur molestias adipisci sunt quos tempore fugiat, modi veritatis in voluptatibus? Cumque temporibus blanditiis, iure explicabo nostrum tempora consequuntur voluptates provident? Quas culpa libero voluptatum deserunt, ab ullam laborum nam cumque veritatis, debitis consectetur itaque consequatur soluta, fuga unde error voluptatem facilis est! Voluptates corporis esse fugiat asperiores! Quaerat quis, facere pariatur officiis excepturi accusamus, quidem hic voluptatibus delectus velit, magnam libero corrupti magni consequuntur doloribus voluptatum voluptas facilis aut ex ea! Possimus doloremque ducimus error labore commodi nam nulla inventore ipsam praesentium sint, velit suscipit soluta? Voluptatem esse dolor, ab iure rem consectetur voluptates amet, ipsa laborum aperiam voluptatibus! Deserunt quisquam officiis soluta ratione aliquid, eum numquam magnam fuga nostrum provident architecto incidunt nisi rerum accusantium aut consectetur minima labore totam velit voluptatem reiciendis consequuntur. Beatae expedita nisi adipisci aut impedit dolorem, incidunt ullam placeat, iure, non est eligendi eum at ab nobis dicta excepturi alias ut. Nemo mollitia expedita nobis reiciendis temporibus! Suscipit illo quam similique voluptas omnis facilis et assumenda aliquid obcaecati molestiae amet possimus natus, quos, perspiciatis ipsam maiores.</p>
            </div>
        </div>
    );
};

export default TeamDetails;