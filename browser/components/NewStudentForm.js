import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          First Name:
          <input type="text" name="firstName" />
          <br />
          Last Name:
          <input type="text" name="lastName" />
          <br />
          Email:
          <input type="text" name="email" />
        </form>
        <button type="submit">Submit</button>
      </div>
    );
  }
}
