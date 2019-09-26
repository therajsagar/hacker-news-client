import React from 'react';
import bug from '../assets/bug.gif';
import '../styles/nodata.css';

export default function() {
  return (
    <>
      <img src={bug} alt='loading...' className='bug' />
      <span id='errortext'>Max Limit Reached!</span>
    </>
  );
}
