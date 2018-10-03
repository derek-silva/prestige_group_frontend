import React, { Component } from 'react';

export default class LogOut extends Component {
	render() {
		this.props.history.push("/")
		localStorage.clear()
		return (
			<div></div>
		);
	}
}
