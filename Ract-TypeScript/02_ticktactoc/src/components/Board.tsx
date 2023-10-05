import React, { useState } from "react";
import { styled } from "styled-components";
import { Square } from "./Square";

export const Board: React.FC = () => {
	const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
	const [xisNext, setXisNext] = useState(true);


	const status = `"Next Plater ${xisNext ? "❌" : "⭕️"} `;
	const handleClick = (i: number): void => {
		const newSquares = squares.slice();
		newSquares[i] = xisNext ? "❌" : "⭕️";
		setSquares(newSquares);
		setXisNext((prev) => !prev);
	};

	const renderSquare = (i: number): JSX.Element => {
		return <Square value={squares[i]} onClick={() => handleClick(i)} />;
	};

	const calculateWinner = (squares: Array<string | null>): string | null => {
		const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6]]
		for (let index = 0; index <lines.length; index++) {
			const [a, b, c] = lines[index];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a]
			}
	};

	const winner = calculateWinner(squares);
	return (
		<div>
			<Status>{status}</Status>
			{[...Array(3)].map((_, i) => (
				<BoardRow key={i}>{[...Array(3)].map((_, j) => renderSquare(i * 3 + j))}</BoardRow>
			))}
		</div>
	);
};

const Status = styled.div`
	margin-bottom: 10px;
`;

const BoardRow = styled.div``;
