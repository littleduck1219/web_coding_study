import React, { useState } from "react";
import * as G from "../style/GlobalStyle";
import * as I from "../style/InputStyle";
import { color } from "../style/Color";

function InputStyle() {
	const [input, setInput] = useState({ name: "", price: "" });

	const { name, price } = input;

	const onChange = (event) => {
		const { name, value } = event.target;
		if (name === "price") {
			const onlyNums = value.replace(/[^0-9]/g, "");
			let pointNum = onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			setInput({
				...input,
				[name]: pointNum,
			});
		} else {
			setInput({
				...input,
				[name]: value,
			});
		}
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
		const alertMessage = `{name: ${name}, price: ${price.replace(/,/g, "")}}`;
		alert(alertMessage);
		setInput({ name: "", price: "" });
	};
	return (
		<div>
			<h1>{"Input"}</h1>
			<I.AllTagStyle>
				<div>
					<span>{"이름"}</span>
					<I.InputStyle type='text' name={"name"} value={name} onChange={onChange} />
				</div>
				<div>
					<span>{"가격"}</span>
					<I.InputStyle type='text' name={"price"} value={price} onChange={onChange} placeholder='0' />
				</div>
				<G.ButtonSmallStyle backgroundcolor={color.green} onClick={secondAlertButton} children={"저장"} />
			</I.AllTagStyle>
		</div>
	);
}

export default InputStyle;
