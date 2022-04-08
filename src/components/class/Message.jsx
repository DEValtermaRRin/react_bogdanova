import React, { Component } from "react";

export class Message extends Component {
  render() {
    return (
        <div className="msg">
            {this.props.send.map((msg) => (
              <p>{msg}</p>
            ))}
        </div>
    );
  }
}
