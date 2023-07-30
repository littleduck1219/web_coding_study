import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Todopage from "./pages/Todopage";

function App() {
	return (
		<StContainer>
			<Header></Header>
			<Todopage></Todopage>
		</StContainer>
	);
}

export default App;

const StContainer = styled.section`
	max-width: 1200px;
	min-width: 800px;
	margin: auto;
`;
