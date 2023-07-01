import React from "react";
import styled from "styled-components";

function Header() {
	console.log("header render");

	return (
		<HeaderContainer>
			<HeaderContent>littleduck</HeaderContent>
			<HeaderContent>To Do-List : React</HeaderContent>
		</HeaderContainer>
	);
}

// export default Header;
export default React.memo(Header);

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2px solid #7448a8;
	border-radius: 8px;
	padding: 20px;
`;

const HeaderContent = styled.span`
	font-weight: 500;
	font-size: 20px;
`;
