import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavWrapper = styled.div`
	width: 100%;
	height: 5vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	> span {
		width: 40%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: grey;
	}
	> #current {
		border-bottom: 2px solid black;
		color: black;
	}
`;
const Nav = ({ currentMenu, menuHandle }) => {
	const [current, setCurrent] = useState("Day");
	const navigate = useNavigate();
	const onClickHandler = (e) => {
		if (e.target.textContent === "Week") {
			setCurrent("Week");
			navigate("/Week");
		} else {
			setCurrent("Day");
			navigate("/");
		}
	};
	return (
		<>
			<NavWrapper current="Day">
				<span
					id={current === "Day" ? "current" : ""}
					onClick={onClickHandler}
				>
					Day
				</span>
				<span
					id={current === "Week" ? "current" : ""}
					onClick={onClickHandler}
				>
					Week
				</span>
			</NavWrapper>
		</>
	);
};

export default Nav;
