import React from "react";

const Progress = ({ goal }) => {
	const totalGoal = goal?.subGoal.length;
	const completedGoal = goal?.subGoal.filter((sub) => sub.completed).length;
	const goalCompletionPer = (completedGoal / totalGoal) * 100;
	return (
		<p>
			<span>PROGRESS</span>

			<i>
				{goalCompletionPer === 0
					? "Start Accomplishing this Goal "
					: `completed ${completedGoal} of ${totalGoal} subgoals that is (
				${goalCompletionPer}%)`}
			</i>
		</p>
	);
};

export default Progress;
