import React, { useState } from "react";
import styled from "styled-components";

const PopupFade = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1500;
	background-color: rgba(0, 0, 0, 0.7);
	display: none;
	transition: 1s ease-in-out;

	&.isPopup {
		display: block;
		transition: 1s ease-in-out;
	}
`;

const PopupWrapper = styled.div`
	border-top: 5px solid #808080;
	width: 100%;
	height: 25vh;
	border-radius: 25px 25px 0 0;
	background-color: #d9d9d9;
	position: absolute;
	bottom: -30vh;
	z-index: 2000;
	transition: 0.5s ease-out;
	color: #808080;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	&.isPopup {
		bottom: 0;
		transition: 0.5s ease-out;
	}

	> div {
		width: 90%;
		height: 20%;
		display: flex;
		align-items: center;
	}
	> :nth-child(1) {
		font-size: 2rem;
	}
	> :nth-child(2) {
		height: 50px;
		border-radius: 25px;
		background-color: #e9e9e9;
		display: flex;
		justify-content: center;
		> input {
			width: 90%;
			font-size: 1.5rem;
			background-color: transparent;
			border: none;
			&:focus {
				outline: none;
			}
		}
	}
	> :nth-child(3) {
		display: flex;
		justify-content: end;
		> button {
			width: 40%;
			height: 60px;
			border-radius: 30px;
			background-color: #aaaaaa;
			border: 3px solid #808080;
			color: white;
			font-size: 1.4rem;

			&:hover {
				background-color: #4ecb71;
				border: 3px solid #4b905e;
				color: white;
			}
		}
	}
`;

const Popup = ({
	isPopup,
	setPopup,
	currentItem,
	setCurrentItem,
	setIsUpdate,
	isUpdate,
}) => {
	const [newVal, setNewVal] = useState(currentItem.title);
	const onUpdate = () => {
		fetch(`http://localhost:3001/todos/${currentItem.id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: newVal }),
		}).then(() => {
			setPopup(false);
			setCurrentItem({});
			setIsUpdate(!isUpdate);
		});
	};
	return (
		<>
			<PopupFade
				className={isPopup ? "isPopup" : ""}
				onClick={() => setPopup(false)}
			></PopupFade>
			<PopupWrapper className={isPopup ? "isPopup" : ""}>
				<div>EDIT</div>
				<div>
					<input
						type="text"
						value={newVal}
						onChange={(e) => setNewVal(e.target.value)}
					/>
				</div>
				<div>
					<button onClick={onUpdate}>UPDATE</button>
				</div>
			</PopupWrapper>
		</>
	);
};

export default Popup;
