import styled from "styled-components";

const AllTagStyle = styled.form`
	display: flex;
	/* flex-direction: row; */
	gap: 30px;
`;

const InputStyle = styled.input`
	border: 1px solid black;
	border-radius: 8px;
	width: 200px;
	height: 40px;
	padding-left: 12px;
	padding-right: 12px;
	color:black ::placeholder {
		color: black;
	}

	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: black;
	}
`;

export { AllTagStyle, InputStyle };
