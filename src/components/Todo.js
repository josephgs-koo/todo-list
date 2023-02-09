import styled from "styled-components";

const TodoWrapper = styled.div`
	background-color: #d9d9d9;
	width: 90%;
	height: 5vh;
	border-radius: 20px;
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 15px;

	> :nth-child(1) {
		width: 80%;
		height: 100%;
		display: flex;
		align-items: center;

		span {
			font-size: 1.4rem;

			&.isChecked {
				text-decoration: line-through;
				font-style: italic;
				font-weight: 300;
				color: #808080;
			}
		}
	}
`;
const BtnWrapper = styled.div`
	width: 20%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	> button {
		background-color: transparent;
		border: none;
		padding: 0;
	}
`;

const DelImg = styled.svg`
	fill: #808080;
	&:hover :nth-child(1) {
		fill: #fb5151;
		transition: 0.3s ease-in-out;
	}
`;

const Todo = ({ todo, onCheck, onDelete, setPopup, setCurrentItem }) => {
	const editHander = () => {
		setPopup(true);
		setCurrentItem({ ...todo });
	};
	return (
		<TodoWrapper>
			<div onClick={editHander}>
				<span className={todo.checked ? "isChecked" : ""}>
					{todo.title}
				</span>
			</div>

			<BtnWrapper>
				<button onClick={() => onCheck(todo.id)}>
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.25 20.75L22.0625 11.9375L20.3125 10.1875L13.25 17.25L9.6875 13.6875L7.9375 15.4375L13.25 20.75ZM15 27.5C13.2708 27.5 11.6458 27.1717 10.125 26.515C8.60417 25.8592 7.28125 24.9688 6.15625 23.8438C5.03125 22.7188 4.14083 21.3958 3.485 19.875C2.82833 18.3542 2.5 16.7292 2.5 15C2.5 13.2708 2.82833 11.6458 3.485 10.125C4.14083 8.60417 5.03125 7.28125 6.15625 6.15625C7.28125 5.03125 8.60417 4.14042 10.125 3.48375C11.6458 2.82792 13.2708 2.5 15 2.5C16.7292 2.5 18.3542 2.82792 19.875 3.48375C21.3958 4.14042 22.7188 5.03125 23.8438 6.15625C24.9688 7.28125 25.8592 8.60417 26.515 10.125C27.1717 11.6458 27.5 13.2708 27.5 15C27.5 16.7292 27.1717 18.3542 26.515 19.875C25.8592 21.3958 24.9688 22.7188 23.8438 23.8438C22.7188 24.9688 21.3958 25.8592 19.875 26.515C18.3542 27.1717 16.7292 27.5 15 27.5ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z"
							fill={todo.checked ? "#4ECB71" : "#808080"}
						/>
					</svg>
				</button>
				<button onClick={() => onDelete(todo.id)}>
					<DelImg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M21.8182 4.61538H30V6.92308H27.2727V27.6923L24.5455 30H5.45455L2.72727 27.6923V6.92308H0V4.61538H8.18182V2.30769C8.18182 1.69565 8.46916 1.10868 8.98062 0.675907C9.49208 0.243131 10.1858 0 10.9091 0H19.0909C19.8142 0 20.5079 0.243131 21.0194 0.675907C21.5308 1.10868 21.8182 1.69565 21.8182 2.30769V4.61538ZM19.0909 2.30769H10.9091V4.61538H19.0909V2.30769ZM5.45455 27.6923H24.5455V6.92308H5.45455V27.6923ZM10.9091 9.23077H8.18182V25.3846H10.9091V9.23077ZM13.6364 9.23077H16.3636V25.3846H13.6364V9.23077ZM19.0909 9.23077H21.8182V25.3846H19.0909V9.23077Z"
						/>
					</DelImg>
				</button>
			</BtnWrapper>
		</TodoWrapper>
	);
};

export default Todo;
