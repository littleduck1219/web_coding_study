import { styled, css } from "styled-components";

const ModalFull = styled.div`
	z-index: 10;
	width: 100%;
	height: 100vh;
	inset: 0px;
	position: fixed;
	opacity: ${({ opacity }) => opacity};
	background-color: rgb(221, 221, 221);
`;

const ModalLargeBoxStyle = styled.div`
	z-index: 10;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 12px;
	box-sizing: border-box;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	padding: 24px;
	background-color: rgb(255, 255, 255);

	${({ type }) =>
		type === "ModalLarge"
			? css`
					width: 500px;
					height: 300px;
			  `
			: type === "ModalMedium"
			? css`
					width: 300px;
					height: 200px;
			  `
			: css`
					width: 200px;
					height: 100px;
			  `}
`;

const LargeModalButtonContainerStyle = styled.div`
	display: flex;
	gap: 10px;
	margin-left: auto;
`;

const AllTagStyle = styled.div`
	display: flex;
	gap: 10px;
`;

const ModalMediumBoxStyle = styled.div`
	z-index: 10;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 12px;
	box-sizing: border-box;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	padding: 24px;
	background-color: rgb(255, 255, 255);

	${({ type }) =>
		type === "ModalLarge"
			? css`
					width: 500px;
					height: 300px;
			  `
			: type === "ModalMedium"
			? css`
					width: 300px;
					height: 200px;
			  `
			: css`
					width: 200px;
					height: 100px;
			  `}
`;

const SmallModalInnerStyle = styled.div`
	display: flex;
`;

export {
	ModalFull,
	ModalLargeBoxStyle,
	LargeModalButtonContainerStyle,
	AllTagStyle,
	ModalMediumBoxStyle,
	SmallModalInnerStyle,
};
