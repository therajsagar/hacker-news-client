import React from 'react';
import '../styles/item.css'

const Story = (props) =>    
       <tr>
       <td>
       <div className='item_body'>
       <a href={props.url} target="_blank" rel="noopener noreferrer" className="headline">
       <span className='title'>  {props.title}</span>
       </a>
       <br/>
       <span className='subtext'>
       {props.score} points by {props.user} {props.time_ago} | {props.type} | {props.comment} comments | <a href={`http://${props.domain}`} target="_blank" rel="noopener noreferrer">{props.domain}</a>
       </span>
       <br/><br/>
       </div>
       </td>
       </tr>


export default Story;