import React from 'react';
import './App.css';

import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

export default class App extends React.Component {
  state = {
    friends: ['Loading...']
  };

  getData = async () => {
    await axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getData();
  }

  addFriend = async (name, age, email) => {
    await axios.post('http://localhost:5000/friends', { name, age, email });
    this.getData();
  }

  updateFriend = async (name, age, email, id) => {
    await axios.put(`http://localhost:5000/friends/${id}`, { name, age, email });
    this.getData();
  }
  
  deleteFriend = async id => {
    await axios.delete(`http://localhost:5000/friends/${id}`);
    this.getData();
  }

  render() {
    return (
      <div className='App'>
        <FriendForm submit={this.addFriend} />
        <FriendsList updateFriend={this.updateFriend} friends={this.state.friends} deleteFriend={this.deleteFriend} />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
      </div>
    );
  }
}
