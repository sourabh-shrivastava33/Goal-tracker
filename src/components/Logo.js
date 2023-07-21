import React, { Component } from "react";
import { GoGoal } from "react-icons/go";
export default class Logo extends Component {
	render() {
		return (
			<div className="logo-container">
				<h1>
					<GoGoal />
					GOAL TRACKER
				</h1>
			</div>
		);
	}
}
