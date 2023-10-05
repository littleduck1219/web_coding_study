import React from "react";
import "./App.css";
import { styled } from "styled-components";
import { Board } from "./components/Board";

const App: React.FC = () => {
	return (
		<Game>
			<GameBoard>
				<Board />
			</GameBoard>
			<GameInfo>GameInfo</GameInfo>
		</Game>
	);
};

export default App;

const Game = styled.div`
	display: flex;
	flex-direction: row;
`;

const GameBoard = styled.div``;
const GameInfo = styled.div`
	margin-left: 20px;
`;
