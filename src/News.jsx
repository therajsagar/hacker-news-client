import React from 'react';


const News = (props) =>    <li>
    <a href={props.url} target="_blank" rel="noopener noreferrer"><span className='title'>{props.title}</span></a> 
    <br/>
    <span className='subtext'>{props.score} points by {props.by} | {props.type}</span>
    <br/><br/>
    </li>


export default News;