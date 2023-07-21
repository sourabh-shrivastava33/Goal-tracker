import React from "react";

import { AiOutlineExpandAlt } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Progress from "./Progress";
const GoalList = ({ goal, onExpand, selectedGoal, onDelete }) => {
	const isSelected = selectedGoal?.id === goal.id;
	function handleClickOnExpandIcon() {
		onExpand(goal);
	}

	return (
		<li className={`goal-list ${isSelected ? "selected" : ""}`}>
			<h3>{goal.Goal}</h3>
			<Progress goal={goal} />
			<span className="deadline">
				<span>deadline</span>
				{goal.deadline}
			</span>
			<span>
				<AiFillDelete
					className="icon delete-icon"
					onClick={() => onDelete(goal.id)}
				/>
				<AiOutlineExpandAlt
					className="icon expand-icon"
					onClick={handleClickOnExpandIcon}
				/>
			</span>
		</li>
	);
};

export default GoalList;
