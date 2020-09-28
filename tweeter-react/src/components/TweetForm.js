import React, { useState } from 'react';
import './TweetForm.css';

export default function TweetForm(props) {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState('');
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = { color: tweetRemainingLength >= 0 ? 'black' : 'red' };
  const submitTweet = (event) => {
    event.preventDefault();
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText('');
    }
  };
  return (
    <section className='new-tweet'>
      <form className='form' onSubmit={submitTweet}>
        <textarea
          name='text'
          className='tweet-text'
          id='tweet-text'
          placeholder='What are you humming about?'
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        ></textarea>
        <footer className='new-tweet__footer'>
          <button type='submit' className='tweet-button font-bungee' id='tweet-button'>
            Tweet
          </button>
          <output name='counter' className='counter font-bungee' for='tweet-text'>
            <span style={spanStyle} id='chars'>
              {140 - tweetText.length}
            </span>
          </output>
        </footer>
      </form>
    </section>
  );
}
