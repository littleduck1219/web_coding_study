import React from "react";
import styled from "styled-components";
import Todopage from "../components/Todopage";
import Header from "../components/Header";

function App() {
	return (
		<StContainer>
			<Header />
			<Todopage />
			<footer></footer>
		</StContainer>
	);
}

export default App;

const StContainer = styled.section`
	max-width: 1200px;
	min-width: 800px;
	margin: 0 auto;
`;
