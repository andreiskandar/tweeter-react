import React from 'react';
import Tweets from '../components/Tweets';

export default {
  title: 'Tweet Container',
};
export const emptyTweet = () => <Tweets />;

export const populatedTweet = () => {
  const tweets = [
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
      name: 'Raf Tam',
      handle: '@rTam',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      message: 'I wanna go to Europe!',
      date: '15 days ago',
    },
  ];
  return <Tweets tweetData={tweets} />;
};
