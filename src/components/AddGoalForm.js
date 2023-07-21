import React from "react";
import { useState } from "react";
import Button from "./Button";
let subGoal = [];
const AddGoalForm = ({ onSubmit }) => {
	const [goal, setGoal] = useState("");
	const [description, setDesciption] = useState("");
	const [deadline, setDeadLine] = useState("");
	const [subGoals, setSubGoals] = useState("");

	function handleGoalChange(e) {
		setGoal(e.target.value);
	}
	function handleDescriptionChange(e) {
		setDesciption(e.target.value);
	}
	function handleDeadLineChange(e) {
		setDeadLine(e.target.value);
	}
	function handleSubGoalChange(e) {
		setSubGoals(e.target.value);
	}
	function handleSubGoalSubmit(e) {
		if (e.key !== "Enter" || e.target.value === "") return;
		e.preventDefault();

		const newSubGoalObj = {
			id: crypto.randomUUID(),
			sub: [e.target.value],
			completed: false,
		};
		subGoal.push(newSubGoalObj);

		setSubGoals("");
	}
	function handleFormSubmission() {
		if (
			goal === "" ||
			description === "" ||
			deadline === "" ||
			subGoal.length === 0
		)
			return;
		const newGoalObj = {
			id: crypto.randomUUID(),
			Goal: goal,
			description: description,
			subGoal: subGoal.slice(),

			deadline: deadline,
		};
		onSubmit(newGoalObj);

		setDeadLine("");
		setGoal("");
		setDesciption("");
		subGoal = [];
	}
	return (
		<div className="add-goal-form">
			<form>
				<span className="goal-name">
					<label>Goal</label>
					<input
						value={goal}
						onChange={handleGoalChange}
						type="text"
						maxLength={20}
						placeholder="Max 20 character"
					/>
				</span>
				<span className="goal-description">
					<label>Description</label>
					<input
						value={description}
						onChange={handleDescriptionChange}
						type="text"
						maxLength={80}
						placeholder="Max 80 character"
					/>
				</span>
				<span className="goal-description deadline-date">
					<label>Deadline</label>
					<input
						value={deadline}
						onChange={handleDeadLineChange}
						type="text"
						placeholder="YYYY-MM-DD"
					/>
				</span>
			</form>
			<textarea
				value={subGoals}
				onChange={handleSubGoalChange}
				onKeyDown={handleSubGoalSubmit}
				maxLength={50}
				placeholder=" Write sub goal and hit enter  Max 50 character each"
			></textarea>
			<Button look={"submit"} onClick={handleFormSubmission}>
				Submit
			</Button>
		</div>
	);
};

export default AddGoalForm;
