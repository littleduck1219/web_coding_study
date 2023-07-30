import React from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import "./App.css";

const App = () => {
	const onEnter = ({ currentTarget }) => {
		gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
	};

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
	};
	return (
		<BoxContainer>
			<StBox>
				<HoverBox onMouseEnter={onEnter} onMouseLeave={onLeave}>
					Hello
				</HoverBox>
			</StBox>
			<div className='app'>
				<div className='box'>Hello</div>
			</div>
		</BoxContainer>
	);
};
export default App;

const BoxContainer = styled.div`
	gap: 50px;
	margin-top: 50px;
`;
const StBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
`;

const HoverBox = styled.div`
	background-color: #28a92b;
	width: 300px;
	height: 300px;
`;
