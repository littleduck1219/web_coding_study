import { useState, useRef, useEffect } from "react";
import * as S from "../style/SelectStyle";

const Select2 = () => {
	const [actionModal, setActionModal] = useState(false);
	console.log("🚀 ~ file: Select2.jsx:6 ~ Select2 ~ actionModal:", actionModal);
	const [modalChoice, setModalChoice] = useState("리엑트");

	const selectorIndex = ["리액트", "자바", "스프링", "리엑트네이티브"];
	const node = useRef();

	const selectButtonHandler = (setAction) => () => {
		setAction((pre) => !pre);
	};

	const choiceHandler = (setModalChoice, setActionModal) => (event) => {
		setModalChoice(event.target.innerText);
		setActionModal(false);
	};

	useEffect(() => {
		const clickOutside = (e) => {
			if (actionModal && node.current && !node.current.contains(e.target)) {
				setActionModal(false);
			}
		};

		document.addEventListener("click", clickOutside);

		return () => {
			document.removeEventListener("click", clickOutside);
		};
	}, [actionModal]);

	return (
		<S.SelectorPartContainerStyle>
			<h1>{"Select2"}</h1>
			<S.SelectorButtonStyle onClick={selectButtonHandler(setActionModal)} ref={node}>
				<p>{modalChoice}</p>
			</S.SelectorButtonStyle>
			{actionModal && (
				<S.SecondSelectorChoiceBoxStyle position='absolute'>
					{selectorIndex.map((list, index) => {
						return (
							<S.SelectorChoiceStyle
								key={index}
								onClick={(event) => {
									event.stopPropagation();
									choiceHandler(setModalChoice, setActionModal)(event);
								}}>
								{list}
							</S.SelectorChoiceStyle>
						);
					})}
				</S.SecondSelectorChoiceBoxStyle>
			)}
		</S.SelectorPartContainerStyle>
	);
};

export default Select2;
