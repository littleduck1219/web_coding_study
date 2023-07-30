import React from "react";
import styled from "styled-components";

function Buttons(insert) {
	return <ButtonStyle>{insert.children}</ButtonStyle>;
}

export default Buttons;

const ButtonStyle = styled.button``;
