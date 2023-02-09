import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Todo from "../components/Todo";
import addListIcon from "../esset/addBtn.svg";

const MakeListContainer = styled.div`
	width: 90%;
	height: 15vh;
	background-color: #d9d9d9;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 30px;
	align-items: center;
	margin-top: 10px;
	z-index: 1000;

	> div {
		width: 90%;

		> span {
			font-size: 2rem;
			margin-left: 30px;
		}
	}
	> :nth-child(2) {
		height: 20%;
		font-size: 2rem;
		background-color: #e9e9e9;
		border-radius: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;

		> input {
			width: 75%;
			font-size: 1.4rem;
			border: none;
			background-color: transparent;
			&:focus {
				outline: none;
			}
		}
		> button {
			width: 15%;
			background-color: transparent;
			border: none;
			margin-right: 2%;
		}
	}
`;

const Day = ({ date, setPopup, setCurrentItem, isUpdate }) => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const fet = async () => {
		fetch(`http://localhost:3001/todos`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setTodos(data);
			})
			.catch((err) => {
				setTodos([]);
			});
	};

	useEffect(() => {
		fet();
	}, [isUpdate]);

	const onCheckedHandler = (id) => {
		fetch(`http://localhost:3001/todos/${id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				checked:
					todos.filter((x) => x.id === id)[0].checked === false
						? true
						: false,
			}),
		})
			.then(() => {
				fet();
			})
			.catch((err) => console.log(err));
	};

	const onDeleteHandler = (id) => {
		fetch(`http://localhost:3001/todos/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		}).then(() => fet());
	};

	const createBtn = () => {
		console.log(newTodo);
		fetch(`http://localhost:3001/todos`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title: newTodo,
				checked: false,
			}),
		}).then(() => {
			fet();
			setNewTodo("");
		});
	};

	return (
		<>
			<MakeListContainer>
				<div>
					<span>
						{date.toDateString().split(" ").slice(1, 3).join(" ")}
					</span>
				</div>
				<div>
					<input
						type="text"
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
					/>
					<button onClick={createBtn}>
						<img src={addListIcon} alt="add" />
					</button>
				</div>
			</MakeListContainer>

			{todos.length !== 0
				? todos.map((x) => (
						<Todo
							todo={x}
							key={x.id}
							onCheck={onCheckedHandler}
							onDelete={onDeleteHandler}
							setPopup={setPopup}
							setCurrentItem={setCurrentItem}
						/>
				  ))
				: "계획을 추가하세요"}
		</>
	);
};

export default Day;
