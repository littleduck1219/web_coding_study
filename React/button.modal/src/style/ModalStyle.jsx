import { styled, css } from "styled-components";

const ModalPartContainerStyle = styled.div``;

const ModalFull = styled.div`
	width: 100%;
	height: 100vh;
	inset: 0px;
	position: fixed;
	opacity: ${({ opacity }) => opacity};
	background-color: rgb(221, 221, 221);
	z-index: 3;
`;

const ModalLargeBoxStyle = styled.div`
	z-index: 3;
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

const ModalNotificationStyle = styled.span``;

const LargeModalStyle = styled.div``;

const AllTagStyle = styled.div`
	display: flex;
	gap: 10px;
`;

const SmallModalStyle = styled.div``;

const ModalMediumBoxStyle = styled.div`
	z-index: 3;
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
	ModalPartContainerStyle,
	LargeModalButtonContainerStyle,
	ModalNotificationStyle,
	LargeModalStyle,
	AllTagStyle,
	SmallModalStyle,
	ModalMediumBoxStyle,
	SmallModalInnerStyle,
};
