import React from "react";
import Goal from "./components/Goal";
import AddGoalForm from "./components/AddGoalForm";
import ExpandedGoal from "./components/ExpandedGoal";
import Button from "./components/Button";
import Logo from "./components/Logo";
import { useState } from "react";

const goals = [
	{
		id: 0,
		Goal: "Course",
		description: "Complete atleast 10 lecture daily",
		subGoal: [
			{ sub: "asdfstate", completed: false, id: 0 },
			{ sub: "redsdcwux", completed: false, id: 1 },
			{ sub: "acsdcic", completed: false, id: 2 },
			{ sub: "sdaeadfetate", completed: false, id: 3 },
		],
		deadline: "2024-08-21",
	},
	{
		id: 1,
		Goal: "react Course",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		subGoal: [
			{ sub: "state", completed: false, id: 0 },
			{ sub: "redux", completed: false, id: 1 },
			{ sub: "maic", completed: false, id: 2 },
			{ sub: "sadfetate", completed: false, id: 3 },
		],
		deadline: "2023-08-11",
	},
	{
		id: 3,
		Goal: "Sourabh",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		subGoal: [
			{ sub: "ksakdf", completed: false, id: 0 },
			{ sub: "sdfasfe", completed: false, id: 1 },
			{ sub: "safsdfetate", completed: false, id: 2 },
			{ sub: "stateradafe", completed: false, id: 3 },
		],
		deadline: "2023-07-21",
	},
];

function App() {
	const [goalArr, setGoalArr] = useState(goals);
	const [showAddGoalForm, setShowAddForm] = useState(false);
	const [isSelected, setIsSelected] = useState(null);
	const [sortBy, setSortBy] = useState("input");
	function handleClick() {
		setShowAddForm((cur) => !cur);
		setIsSelected(null);
	}
	function handleGoalArrOnFormSubmission(goal) {
		setGoalArr((curr) => [...curr, goal]);
		setShowAddForm(false);
	}
	function handleSubGoalCompletion(id, subGoalId) {
		const newArr = goalArr.map((goal) =>
			goal.id === id
				? {
						...goal,
						subGoal: goal.subGoal.map((sub) =>
							sub.id === subGoalId
								? {
										...sub,
										completed: !sub.completed,
								  }
								: sub
						),
				  }
				: goal
		);
		setGoalArr(newArr);
		setIsSelected(newArr.find((goal) => goal.id === id));
	}
	function handleGoalExpand(goal) {
		const index = goalArr.findIndex((el) => el.id === goal.id);

		setIsSelected((cur) => (cur?.id === goal.id ? null : goalArr[index]));
		setShowAddForm(false);
	}
	function handleDelete(id) {
		setGoalArr(goalArr.filter((goal) => goal.id !== id));
		setIsSelected(null);
	}

	let sortedGoalArr;
	if (sortBy === "input") sortedGoalArr = goalArr;
	if (sortBy === "deadline")
		sortedGoalArr = goalArr
			.slice()
			.sort(
				(a, b) =>
					new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
			);

	if (sortBy === "progress")
		sortedGoalArr = goalArr.slice().sort((a, b) => {
			const progressPerA =
				a.subGoal.filter((sub) => sub.completed).length / a.subGoal.length;
			const progressPerB =
				b.subGoal.filter((sub) => sub.completed).length / b.subGoal.length;
			if (progressPerA > progressPerB) {
				return 1;
			} else if (progressPerA < progressPerB) {
				return -1;
			} else return 0;
		});

	return (
		<div className="App">
			<Logo />
			<Button look="add-goal" onClick={handleClick}>
				{showAddGoalForm ? "Close" : "Add Goal"}
			</Button>
			<select
				className="sort"
				value={sortBy}
				onChange={(e) => {
					setSortBy(e.target.value);
				}}
			>
				<option value="input">Sort by Input</option>
				<option value="deadline">Sort by Deadline</option>
				<option value="progress">Sort by Progress</option>
			</select>
			<div className="sidebar">
				{goalArr.length > 0 && (
					<Goal
						onDelete={handleDelete}
						goals={sortedGoalArr}
						onExpand={handleGoalExpand}
						selectedGoal={isSelected}
					/>
				)}
				{showAddGoalForm && (
					<AddGoalForm onSubmit={handleGoalArrOnFormSubmission} />
				)}
				{isSelected && (
					<ExpandedGoal
						goal={isSelected}
						onCheck={handleSubGoalCompletion}
						onClose={setIsSelected}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
