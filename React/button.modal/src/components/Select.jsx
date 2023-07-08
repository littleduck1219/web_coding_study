import React, { useState, useRef, useEffect } from "react";
import * as S from "../style/SelectStyle";

function Select() {
	const [firstSelector, setFirstSelector] = useState(false);
	const [secondSelector, setSecondSelector] = useState(false);
	const [firstChoice, setFirstChoice] = useState("리엑트");
	const [secondChoice, setSecondChoice] = useState("리엑트");

	const selectorIndex = ["리액트", "자바", "스프링", "리엑트네이티브"];

	const selectButtonHandler = (setState) => () => {
		setState((pre) => !pre);
	};

	const choiceHandler = (setChoice, setSelector) => (event) => {
		setChoice(event.target.innerText);
		setSelector(false);
	};

	return (
		<S.SelectorPartContainerStyle>
			<h1>{"Select"}</h1>
			<S.SelectorContainerStyle>
				<S.SelectorButtonHandlerStyle>
					<S.SelectorButtonStyle onClick={selectButtonHandler(setFirstSelector)}>
						<p>{firstChoice}</p>
					</S.SelectorButtonStyle>
					{firstSelector && (
						<div>
							<S.SelectorChoiceBoxStyle zIndex='2' position='absolute'>
								{selectorIndex.map((list) => {
									return (
										<S.SelectorChoiceStyle
											key={list}
											onMouseDown={choiceHandler(setFirstChoice, setFirstSelector)}>
											{list}
										</S.SelectorChoiceStyle>
									);
								})}
							</S.SelectorChoiceBoxStyle>
							<S.SelectorFullStyle
								opacity='0'
								zIndex='1'
								onClick={() => {
									setFirstSelector(false);
								}}
							/>
						</div>
					)}
				</S.SelectorButtonHandlerStyle>
				<S.SelectorButtonHandlerStyle>
					<S.SelectorButtonStyle onClick={selectButtonHandler(setSecondSelector)}>
						<p>{secondChoice}</p>
					</S.SelectorButtonStyle>
					{secondSelector && (
						<div>
							<S.SelectorChoiceBoxStyle zIndex='2'>
								{selectorIndex.map((list, index) => {
									return (
										<S.SelectorChoiceStyle
											key={index}
											onMouseDown={choiceHandler(setSecondChoice, setSecondSelector)}>
											{list}
										</S.SelectorChoiceStyle>
									);
								})}
							</S.SelectorChoiceBoxStyle>
							<S.SelectorFullStyle
								opacity='0'
								zIndex='1'
								onClick={() => {
									setSecondSelector(false);
								}}
							/>
						</div>
					)}
				</S.SelectorButtonHandlerStyle>
			</S.SelectorContainerStyle>
		</S.SelectorPartContainerStyle>
	);
}

export default Select;
