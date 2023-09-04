import React from "react";
import TweetItem from "./TweetItem";

function TweetList(props) {  
  return (
    <div className="ui segment">
      <div className="ui feed">
        {props.user.tweets.map((tweet,index) => (
          <TweetItem
            index={index}
            key={tweet.id}
            updateTweetLike={()=>props.handleUsers(props.user)}
            handle={props.user.handle}
            photo={props.user.photo}
            tweet={tweet}
          />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
