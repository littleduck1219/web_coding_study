import React from "react";
import { styled } from "styled-components";
import { SquareProps } from "../model/TickTackToc";

export const Square: React.FC<SquareProps> = ({ onClick, value }) => {
	return <SquareButton onClick={onClick}>{value}</SquareButton>;
};

const SquareButton = styled.button`
	background-color: white;
	border: 1px solid #999;
	font-size: 24px;
	height: 34px;
	margin-right: -1px;
	padding: 0;
	text-align: center;
	width: 34px;
`;
