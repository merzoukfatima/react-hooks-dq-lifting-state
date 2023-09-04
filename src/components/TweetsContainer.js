import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [index, setIndex] = useState(0);
  const handleIndex = (index) => {
    setIndex(index)
  }
  const [users, setUsers] = useState(userData);
  const handleUsers = (user) => {
    users[index] = user
    setUsers(users)
  }
  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleIndex={handleIndex} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={users[index]} handleUsers={handleUsers} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
