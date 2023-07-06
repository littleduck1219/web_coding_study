import React, { useState } from "react";
import * as G from "../style/GlobalStyle";
import * as I from "../style/InputStyle";
import * as B from "../style/ButtonStyle";
import { color } from "../style/Color";

function InputStyle() {
	const [input, setInput] = useState({ name: "", price: "" });

	const { name, price } = input;
	const onChange = (event) => {
		const { name, value } = event.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	const secondAlertButton = (event) => {
		event.preventDefault();
		if (name.trim() === "" && price.trim() === "") {
			return alert("이름과 가격을 모두 입력해 주세요");
		} else if (name.trim() === "") {
			return alert("이름을 입력해 주세요");
		} else if (price.trim() === "") {
			return alert("가격을 입력해 주세요");
		}
		const alertMessage = `{name: ${name}, price: ${price}}`;
		alert(alertMessage);
		setInput({ name: "", price: "" });
	};
	return (
		<I.InputPartContainerStyle>
			<G.TitleStyle>{"Input"}</G.TitleStyle>
			<I.AllTagStyle>
				<I.InputContainerStyle>
					<span>{"이름"}</span>
					<I.InputStyle name={"name"} value={name} onChange={onChange} />
				</I.InputContainerStyle>
				<I.InputContainerStyle>
					<span>{"가격"}</span>
					<I.InputStyle name={"price"} value={price} onChange={onChange} placeholder='0' />
				</I.InputContainerStyle>
				<G.ButtonSmallStyle backgroundcolor={color.green} onClick={secondAlertButton} children={"저장"} />
			</I.AllTagStyle>
		</I.InputPartContainerStyle>
	);
}

export default InputStyle;
