import React from "react";

import "./FriendForm.scss";

export default class FriendForm extends React.Component {
  state = {
    name: this.props.name,
    age: this.props.age,
    email: this.props.email,
    isEditing: this.props.editing
  };

  submitForm = event => {
    if (this.state.isEditing) {
      event.preventDefault();
      this.props.submit(this.state.name, this.state.age, this.state.email, this.props.id);
    } else {
      this.props.submit(this.state.name, this.state.age, this.state.email);
    }
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm} className="new-friend-form">
        {this.state.isEditing ? null : <h1>Add New Friend</h1>}
        <div className={this.state.isEditing ? "column" : "row"}>
          <div className="field">
            <label>Name: </label>
            <input
              value={this.state.name}
              onChange={async ev =>
                await this.setState({ name: ev.target.value })
              }
              type="text"
              name="firstName"
            />
          </div>
          <div className="field">
            <label>Age: </label>
            <input
              value={this.state.age}
              onChange={async ev =>
                await this.setState({ age: ev.target.value })
              }
              type="number"
              name="age"
            />
          </div>
          <div className="field">
            <label>E-mail: </label>
            <input
              value={this.state.email}
              onChange={async ev =>
                await this.setState({ email: ev.target.value })
              }
              type="email"
              name="email"
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
