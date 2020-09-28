import React from 'react';
import './Tweets.css';

export default function Tweet(props) {
  const { name, avatars, handle, message, date, id } = props.tweet;
  return (
    <div id='tweets-container'>
      <article>
        <div className='tweet-header'>
          <div className='profile'>
            <img src={avatars} alt='' id='avatars' />
            <span id='sender-name'>{name}</span>
          </div>
          <div id='tweeter-account'>{handle}</div>
        </div>
        <p className='tweet-text'>{message}</p>
        <div className='more-info'>
          <div id='created-at'>{date}</div>
          <div className='icons'>
            <i className='fas fa-flag fa-xs'></i>
            <i className='far fa-retweet fa-xs'></i>
            <i className='far fa-heart fa-xs'></i>
          </div>
        </div>
      </article>
    </div>
  );
}
