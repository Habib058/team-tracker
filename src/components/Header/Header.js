import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import img from '../../images/72dace81ac8240fab2361394b28f4a57.jpg';
import css from './Header.css'


const Header = (props) => {
    const logo = props.teamLogo;
    const style ={
        backgroundImage :`url(${img})`,
        backgroundRepeat:'no-repeat',
        height:'450px',
        backgroundSize :'cover',
        position:'relative',
        backgroundPosition:'centre'
    }
    return (
        <div style={style} class=" container">
            <img src ={logo} alt=''></img>
        </div>
    );
};

export default Header;