import React from "react";

const SubGoalList = ({ subGoal, goal, onCheck }) => {
	return (
		<li className="sub-goal">
			<input
				type="checkbox"
				checked={subGoal.completed}
				onChange={() => onCheck(goal.id, subGoal.id)}
			/>
			{subGoal.sub}
		</li>
	);
};

export default SubGoalList;
