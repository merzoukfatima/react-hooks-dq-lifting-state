import { useState } from "react";
import React from "react";

function TweetItem(props) {
  let [tweetLike, setTweetLike] = useState(props.tweet.favorite_count)
  const handleTweetLike = () => {
    tweetLike++
    props.tweet.favorite_count = tweetLike
    setTweetLike(tweetLike)
    props.updateTweetLike()
  }
  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={handleTweetLike}
            className="ui tiny basic labeled icon like button"
          >
            <i className="like icon"></i> {props.tweet.favorite_count} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
