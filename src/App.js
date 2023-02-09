import logo from "./esset/logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Day from "./pages/Day";
import Week from "./pages/Week";
import Popup from "./components/Popup";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Back = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #e0e0e0;
`;

const Wrap = styled.div`
	width: 90%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-radius: 25px;
	/* border: 1px solid grey; */
	padding: 10px 0;
	position: relative;
	background-color: #f0f0f0;
	box-shadow: 10px 10px 20px #b4b2b2, -10px -10px 20px #fbfbfb,
		inset -5px -5px 10px #b4b2b2, inset 5px 5px 10px #ffffff;
	@media screen and (min-width: 500px) {
		width: 480px;
		height: 60vh;
	}
`;

const Header = styled.header`
	/* color: black; */
	/* font-size: 2rem; */
	/* font-weight: bold; */
	height: 5vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const RouteWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
function App() {
	const date = new Date();
	const [popup, setPopup] = useState(false);
	const [currentItem, setCurrentItem] = useState({});
	const [isUpdate, setIsUpdate] = useState(false);

	return (
		<Back>
			<Wrap>
				<BrowserRouter>
					<Header>
						<img src={logo} alt="logo" />
					</Header>
					<Nav selectedMenu="day" />
					<RouteWrapper>
						<Routes>
							<Route
								path="/"
								element={
									<Day
										date={date}
										setPopup={setPopup}
										setCurrentItem={setCurrentItem}
										isUpdate={isUpdate}
									/>
								}
							></Route>
							<Route path="/week" element={<Week />}></Route>
						</Routes>
					</RouteWrapper>
					<Popup
						isPopup={popup}
						setPopup={setPopup}
						currentItem={currentItem}
						setCurrentItem={setCurrentItem}
						isUpdate={isUpdate}
						setIsUpdate={setIsUpdate}
					></Popup>
				</BrowserRouter>
			</Wrap>
		</Back>
	);
}

export default App;
