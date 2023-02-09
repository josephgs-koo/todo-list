import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	.layerPopup {
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		z-index: 1000;
		justify-content: center;
		align-items: center;
		margin: -30px 0 0 -30px;
	}
	.spinner {
		position: absolute;
		top: 45%;
		left: 40%;
		border: 8px solid #f3f3f3; /* Light grey */
		border-top: 8px solid #000000; /* Blue */
		border-radius: 50%;
		width: 60px;
		height: 60px;
		animation: spinner 1s linear infinite;
	}
	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const Loading = () => {
	return (
		<Wrapper>
			<div className="layerPopup">
				<div className="spinner"></div>
			</div>
		</Wrapper>
	);
};

export default Loading;
