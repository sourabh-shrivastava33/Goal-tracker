import React from "react";
import SubGoalList from "./SubGoalList";
const SubGoal = ({ subGoals, goal, onCheck }) => {
	return (
		<ul className="sub-goals">
			{subGoals?.map((subGoal) => (
				<SubGoalList
					goal={goal}
					subGoal={subGoal}
					key={subGoal.id}
					onCheck={onCheck}
				/>
			))}
		</ul>
	);
};

export default SubGoal;
