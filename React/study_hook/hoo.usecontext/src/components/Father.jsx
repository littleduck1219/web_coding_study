import React from "react";
import Child from "./Child";

function Father({ pocketMoney, houseName }) {
	return <Child pocketMoney={pocketMoney} houseName={houseName} />;
}
export default Father;
