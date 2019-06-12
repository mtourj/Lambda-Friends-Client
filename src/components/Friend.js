import React from "react";

import "./Friend.css";

import FriendForm from "./FriendForm";

export default class Friend extends React.Component {
  state = {
    isEditing: false
  };

  updateFriend = (name, age, email, id) => {
    this.props.update(name, age, email, id);

    this.setState({isEditing: false});
  }

  render() {
    const friend = this.props.friend;

    return (
      <div className="friend">
        {this.state.isEditing ? (
          <FriendForm id={friend.id} submit={this.updateFriend} editing name={friend.name} age={friend.age} email={friend.email}/>
        ) : (
          <div>
            <div className="buttons">
              <button className='far fa-edit' onClick={async () => this.setState({ isEditing: true })} />
              <button className='far fa-trash-alt' onClick={() => this.props.delete(friend.id)} />
            </div>
            <h1>{friend.name}</h1>
            <p>Age: {friend.age}</p>
            <p>E-mail: {friend.email}</p>
          </div>
        )}
      </div>
    );
  }
}
