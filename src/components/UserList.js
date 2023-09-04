import React from "react";
import UserCard from "./UserCard";

function UserList(props) {
  const handleUserClick = (index) => {
    console.log("u clicked the user", index)
    props.handleIndex(index)
  }
  return (
    <div className="ui cards">
      {props.users.map((user,index) => (
         <UserCard
          key={user.id}
          index={index}
          handleUserClick={handleUserClick}
          {...user}
        />
))}
    </div>
  );
}

export default UserList;
