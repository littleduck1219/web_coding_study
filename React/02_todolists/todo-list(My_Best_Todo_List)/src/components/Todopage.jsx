import React, { useState } from "react";
import Todoinput from "./Todoinput";
import TodoList from "./TodoList";
import Mousemover from "./Mousemover";
import styled from "styled-components";

function Todopage() {
	return (
		<MainContainer>
			<Mousemover />
			<Todoinput />
			{/* 리스트 두개? set의 의미? 한눈에 알 수 없다 */}
			<TodoList set={false} />
			<TodoList set={true} />
		</MainContainer>
	);
}

export default Todopage;

const MainContainer = styled.main``;
