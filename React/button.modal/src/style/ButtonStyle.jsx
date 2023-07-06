import styled from "styled-components";

const ButtonPartContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const GreenButtonContainerStyle = styled.div`
	display: flex;
	gap: 10px;
`;

const RedButtonContainerStyle = styled.div`
	display: flex;
	gap: 10px;
`;

const ButtonInnerStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`;

const ButtonText = styled.span`
	font-weight: bold;
`;

const ButtonImg = styled.img`
	display: block;
	width: 15px;
	height: 15px;
`;

export {
	ButtonPartContainerStyle,
	GreenButtonContainerStyle,
	RedButtonContainerStyle,
	ButtonInnerStyle,
	ButtonText,
	ButtonImg,
};
