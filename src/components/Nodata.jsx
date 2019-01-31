import React from 'react';
import bug from '../assets/bug.gif';
import '../styles/nodata.css';

const Nope = () => 
<div>
<img src={bug} alt="loading..." className='bug' />
<span id='errortext'>Max Limit Reached!</span>
</div>

export default Nope;