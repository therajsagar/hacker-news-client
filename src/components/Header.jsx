import React from 'react';
import '../styles/header.css';

const Header = (props) => 
<header>
<img src="header.png" alt="Hacker News" className="Header"/>
<button onClick={props.reload}>Hacker News</button>
</header>

export default Header;