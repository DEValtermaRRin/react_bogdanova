import React, { Component } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Message } from './Message';
import { ButtonClear } from './ButtonClear';

export class Form extends Component {
  state = {
    name: 'Send message',
    value: '',
    messages: [],
    btnClear: 'Clear messages',
  };

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] });
    this.setState({ value: '' });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  clearMsg = () => {
    this.setState({ messages: [] });
  };

  render() {
    return (
      <>
        <Input change={this.handleChange} value={this.state.value} />
        <Button name={this.state.name} click={this.handleClick} />
        <Message send={this.state.messages} />
        <ButtonClear name={this.state.btnClear} click={this.clearMsg} />
      </>
    );
  }
}
