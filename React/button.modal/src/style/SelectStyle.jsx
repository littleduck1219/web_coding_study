import styled from "styled-components";

const SelectorPartContainerStyle = styled.div`
	margin-top: 50px;
	// position: relative;
	overflow: hidden;
	border: 3px solid lightgray;
	height: 200px;
`;

const SecondSelectorPartContainerStyle = styled.div`
	margin-top: 50px;
	// position: relative;
	border: 3px solid lightgray;
	height: 200px;
`;

const SelectorContainerStyle = styled.div`
	display: flex;
	gap: 10px;
`;

const SelectorButtonStyle = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	background-color: white;
	border: 1px solid lightgray;
	border-radius: 12px;
	width: 300px;
	height: 40px;
	padding-left: 30px;
	padding-right: 30px;
	::before {
		content: "⌵";
		position: absolute;
		bottom: 10px;
		right: 30px;
		font-size: 20px;
	}
`;

const SelectorChoiceBoxStyle = styled.div`
	z-index: ${({ zIndex }) => zIndex};
	position: ${({ position }) => (position === "absolute" ? "absolute" : "relative")};
	top: ${({ position }) => (position === "absolute" ? "650px" : "10px")};
	border: 1px solid rgb(221, 221, 221);
	border-radius: 12px;
	background-color: rgb(255, 255, 255);
	width: 300px;
	height: 160px;
`;

const SecondSelectorChoiceBoxStyle = styled.div`
	z-index: ${({ zIndex }) => zIndex};
	position: ${({ position }) => (position === "absolute" ? "absolute" : "relative")};
	top: ${({ position }) => (position === "absolute" ? "900px" : "10px")};
	border: 1px solid rgb(221, 221, 221);
	border-radius: 12px;
	background-color: rgb(255, 255, 255);
	width: 300px;
	height: 160px;
`;

const SelectorChoiceStyle = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	padding-left: 25px;
	&:hover {
		background-color: #dcdcdc;
	}
`;

const SelectorFullStyle = styled.div`
	z-index: ${({ zIndex }) => zIndex};
	width: 100%;
	height: 100vh;
	inset: 0px;
	position: fixed;
	opacity: ${({ opacity }) => opacity};
	background-color: rgb(221, 221, 221);
`;

const SelectorButtonHandlerStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

export {
	SelectorPartContainerStyle,
	SelectorContainerStyle,
	SelectorButtonStyle,
	SelectorChoiceBoxStyle,
	SelectorChoiceStyle,
	SelectorFullStyle,
	SelectorButtonHandlerStyle,
	SecondSelectorChoiceBoxStyle,
	SecondSelectorPartContainerStyle,
};
