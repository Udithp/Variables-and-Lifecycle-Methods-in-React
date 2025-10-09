import React, { Component } from 'react';

class User extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        Name: {firstName} {lastName}
      </div>
    );
  }
}

export default User;