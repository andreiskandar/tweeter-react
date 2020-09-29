import React from 'react';
import Tweet from '../components/Tweet';

export default {
  title: 'Single Tweet',
  // component: Tweet,
};

export const emptyTweet = () => {
  const name = '';
  return <Tweet tweet={name} />;
};

export const populatedTweet = () => {
  const singleTweet = {
    id: 1,
    name: 'Andre Iskandar',
    handle: '@andreiskandar',
    avatars: 'https://i.imgur.com/73hZDYK.png',
    message: 'What is your next vacation?',
    date: '10 days ago',
  };
  return <Tweet tweet={singleTweet} />;
};
