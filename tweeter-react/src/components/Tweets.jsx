import React from 'react';
import Tweet from './Tweet';

const Tweets = (props) => {
  const { tweetData } = props;
  console.log('props:', props);
  const tweets = tweetData
    ? tweetData.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })
    : 'There is no tweet';

  return <>{tweets}</>;
};

export default Tweets;
