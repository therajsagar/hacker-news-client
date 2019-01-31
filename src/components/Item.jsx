import React from 'react';
import '../styles/item.css'

const Story = (props) =>    
       <tr className='article'>
       <tr>
       <td colSpan='2' className='serial' valign='top' align='right' width="35px"> {props.serial}. </td>
       <td>
       <a href={props.url} target="_blank" rel="noopener noreferrer" className="headline">
       <span className='title'>  {props.title}</span>
       </a>
       </td>
       </tr>
       <tr>
       <td colSpan='2' className='serial' valign='top' align='right' width="35px"></td>
       <td>
       <span className='subtext'>
       {props.score} points by {props.user} {props.time_ago} | {props.type} | {props.comment} comments | <a href={`http://${props.domain}`} target="_blank" rel="noopener noreferrer">{props.domain}</a>
       </span>
       <br/><br/>
       </td>
       </tr>
       </tr>


export default Story;