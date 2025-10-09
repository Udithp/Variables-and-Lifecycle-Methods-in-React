import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    const users = [
      { firstName: 'Tony', lastName: 'Stark' },
      { firstName: 'James', lastName: 'Mary' },
      { firstName: 'Vikram', lastName: 'Rathod' }
    ];

    return (
      <div style={{ border: '1px solid black', padding: '10px', width: '200px' }}>
        <h3>Users</h3>
        {users.map((user, index) => (
          <User key={index} firstName={user.firstName} lastName={user.lastName} />
        ))}
      </div>
    );
  }
}

export default UserList;