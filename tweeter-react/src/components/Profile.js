import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <header>
      <div>
        <img src='./images/profile-hex.png' alt='' srcset='' className='profile-pic' />
      </div>
      <br />
      <div className='username'>
        <span>
          <b>Andre</b> Iskandar
        </span>
      </div>
    </header>
  );
}
