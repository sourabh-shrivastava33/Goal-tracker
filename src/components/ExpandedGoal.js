import React from "react";
import SubGoal from "./SubGoal";
import Button from "./Button";
const ExpandedGoal = ({ goal, onCheck, onClose }) => {
	return (
		<div className="goal-container expanded">
			<h2 className="goal-heading">{goal?.Goal}</h2>
			<p className="description">{goal?.description}</p>
			<p className="sub-goal-start">Sub Goals</p>
			<SubGoal goal={goal} subGoals={goal?.subGoal} onCheck={onCheck} />
			<Button look="add-goal close-expanded" onClick={() => onClose(null)}>
				Close
			</Button>
		</div>
	);
};

export default ExpandedGoal;
