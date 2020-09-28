import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import Tweet from './components/Tweet';

const initialTweetData = [
  {
    id: 1,
    name: 'Andre Iskandar',
    handle: '@andreiskandar',
    avatars: 'https://i.imgur.com/73hZDYK.png',
    message: 'What is your next vacation?',
    date: '10 days ago',
  },
  {
    id: 2,
    name: 'Rafaela Tam',
    handle: '@rTam',
    avatars: 'https://i.imgur.com/nlhLi3I.png',
    message: 'I wanna go to Europe!',
    date: '15 days ago',
  },
];

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData);

  const tweets = tweetData.map((tweet) => {
    return <Tweet key={tweet.id} tweet={tweet} />;
  });

  const addNewTweet = (message) => {
    const newTweet = {
      id: 3,
      name: 'Amy Manshel',
      handle: '@aMans',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      message,
      date: '6 days ago',
    };
    setTweetData([newTweet, ...tweetData]);
  };
  return (
    <div className='App'>
      <Navigation />
      <div className='main-content'>
        <Profile />
        <main className='container'>
          <TweetForm addNewTweet={addNewTweet} />
          {tweets}
          {/* <Tweet tweets={tweets} /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
