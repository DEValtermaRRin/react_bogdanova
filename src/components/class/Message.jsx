import React, { Component } from 'react';

export class Message extends Component {
  render() {
    return (
      <div className="msg">
        {this.props.send.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
    );
  }
}
