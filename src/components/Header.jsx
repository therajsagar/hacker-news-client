import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

export default function() {
  return (
    <header>
      <img src='header.png' alt='Hacker News' className='Header' />
      <NavLink
        style={{
          margin: '0 5px 0 5px',
          fontSize: '13x',
          color: 'black',
          textDecoration: 'none'
        }}
        to='/'
      >
        <h3>Home</h3>
      </NavLink>
      <span>|</span>
      <NavLink
        style={{
          margin: '0 5px 0 5px',
          fontSize: '13x',
          color: 'black',
          textDecoration: 'none'
        }}
        to='/newStories'
      >
        <h3>New</h3>
      </NavLink>
    </header>
  );
}
