import React from 'react';
import '../styles/story.css'

const Story = (props) =>    <li>
    <a href={props.url} target="_blank" rel="noopener noreferrer">
    <span className='title'>  {props.title}</span></a>
    <br/>
    <span className='subtext'>{props.score} points by {props.by} | {props.type} | {props.comment} comments</span>
    <br/><br/>
    </li>


export default Story;