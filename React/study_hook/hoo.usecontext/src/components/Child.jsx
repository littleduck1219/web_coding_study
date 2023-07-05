import React from "react";

function Child({ houseName, pocketMoney }) {
	console.log(houseName, pocketMoney);

	return (
		<div>
			<span>{houseName}</span>
			<span>{pocketMoney}</span>
		</div>
	);
}
export default Child;
