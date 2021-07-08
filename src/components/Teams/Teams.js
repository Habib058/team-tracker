import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import css from './Teams.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Teams = (props) => {
    const team = props.team;
    const { strTeam, strTeamBadge, strSport, idAPIfootball } = team;
    return (
        <div>
            <div className='teams'>
                <div className="teamCard">
                    <img style={{ width: '110px' }} src={strTeamBadge} alt="" />
                    <h2>{strTeam}</h2>
                    <p>Sports Type : {strSport}</p>
                    <Link to={`/team/${strTeam}`}> <button className='btn btn-primary'>Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Teams;