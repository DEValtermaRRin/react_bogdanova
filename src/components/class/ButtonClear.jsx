import React, { Component } from "react";


export class ButtonClear extends Component {
	render() {
		return <button onClick={this.props.click}>{this.props.name}</button>
	}
}