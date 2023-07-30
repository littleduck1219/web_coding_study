import React from "react";
import Child from "./Child";

const style = {
	color: "red",
	fontWeight: "bold",
};

function Father() {
	return <Child />;
}
export default Father;
