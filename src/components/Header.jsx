import React from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';

const Header = () => 
<header>
      <img src="header.png" alt="Hacker News" className="Header"/>
      <Link to ='/'><h3>Hacker News</h3></Link>
      <Link to='/newest'><h3>new</h3></Link>
</header>

export default Header;