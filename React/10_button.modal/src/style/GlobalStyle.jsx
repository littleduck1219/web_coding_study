import styled from "styled-components";

const LayoutStyle = styled.div`
	margin: 8px;
`;

const ButtonStyleTest = styled.button`
	cursor: pointer;

	border: 3px solid ${({ bordercolor }) => bordercolor};
	border-radius: 8px;
	background-color: white;
	width: 200px;
	height: 50px;
	color: ${({ buttoncolor }) => buttoncolor};
	font-weight: bold;

	&:active {
		background-color: lightgray;
	}
`;

const ButtonLargeStyle = styled.button`
	cursor: pointer;

	border: 3px solid ${({ bordercolor }) => bordercolor};
	border-radius: 8px;
	background-color: white;
	width: 200px;
	height: 50px;
	color: ${({ buttoncolor }) => buttoncolor};
	font-weight: bold;

	&:active {
		background-color: lightgray;
	}
`;

const ButtonMediumStyle = styled.button`
	background-color: ${({ backgroundcolor }) => backgroundcolor};
	border: none;
	border-radius: 8px;
	width: 130px;
	height: 45px;
	color: ${({ buttoncolor }) => buttoncolor};

	&:active {
		background-color: gray;
	}
`;

const ButtonSmallStyle = styled.button`
	background-color: ${({ backgroundcolor }) => backgroundcolor};
	border: none;
	border-radius: 8px;
	width: 100px;
	height: 40px;
	color: ${({ buttoncolor }) => buttoncolor};

	&:active {
		background-color: gray;
	}
`;

const ButtonCircleStyle = styled.button`
	border: 1px solid lightgray;
	border-radius: 100%;
	width: 40px;
	height: 40px;
	top: 10px;
	left: 250px;
	position: absolute;
	cursor: pointer;
	&:active {
		border: 1px solid gray;
	}
`;

export { LayoutStyle, ButtonLargeStyle, ButtonMediumStyle, ButtonSmallStyle, ButtonCircleStyle };
