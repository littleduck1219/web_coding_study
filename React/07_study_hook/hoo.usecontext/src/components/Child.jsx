import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

function Child() {
	const data = useContext(FamilyContext);
	return (
		<div>
			<span>{data.houseName}</span>
			<span>{data.pocketMoney}</span>
		</div>
	);
}
export default Child;
