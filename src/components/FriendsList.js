import React from 'react';

import Friend from './Friend';

import './FriendsList.css';

const FriendsList = props => {
  const updateFriend = (name, age, email, id) => {
    props.updateFriend(name, age, email, id);
  }

  return (
    <div className='list'>
      {props.friends.map(friend => <Friend key={`${friend.id}`} update={updateFriend} friend={friend} delete={props.deleteFriend} />)}
    </div>
  );
}

export default FriendsList;