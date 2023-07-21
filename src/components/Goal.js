import React from "react";
import GoalList from "./GoalList";

const Goal = ({ goals, onExpand, selectedGoal, onDelete }) => {
	return (
		<div className="goal-container">
			<ul>
				{goals.map((goal) => (
					<GoalList
						onDelete={onDelete}
						goal={goal}
						onExpand={onExpand}
						key={goal.id}
						selectedGoal={selectedGoal}
					/>
				))}
			</ul>
		</div>
	);
};

export default Goal;
