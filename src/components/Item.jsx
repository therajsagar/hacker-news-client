import React from 'react';
import '../styles/item.css';

export default function({
  serial,
  data: { domain, url, points, user, type, time_ago, comments_count, title }
}) {
  return (
    <>
      <tr>
        <td
          colSpan='2'
          className='serial'
          valign='top'
          align='right'
          width='35px'
        >
          {' '}
          {serial}.{' '}
        </td>
        <td>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='headline'
          >
            <span className='title'> {title}</span>
          </a>
        </td>
      </tr>
      <tr>
        <td
          colSpan='2'
          className='serial'
          valign='top'
          align='right'
          width='35px'
        ></td>
        <td>
          <span className='subtext'>
            {points} points by {user} {time_ago} | {type} | {comments_count}{' '}
            comments |{' '}
            <a
              href={`http://${domain}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {domain}
            </a>
          </span>
          <br />
          <br />
        </td>
      </tr>
    </>
  );
}
