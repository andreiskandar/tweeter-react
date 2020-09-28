import React from 'react';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className='nav'>
      <span className='logo font-bungee'> tweeter </span>
      <span className='aside'>
        <b>Write</b> a new tweet
        <a href='#' id='home' className='home'>
          {' '}
          <i className='fas fa-chevron-double-down'></i>{' '}
        </a>
      </span>
    </nav>
  );
}
