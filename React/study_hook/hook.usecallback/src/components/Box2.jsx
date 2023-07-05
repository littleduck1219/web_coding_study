import React from "react";
const boxStyle = {
	width: "100px",
	height: "100px",
	backgroundColor: "blue",
	color: "white",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
function Box2() {
	console.log("box2이 렌더링 되었습니다.");
	return <div style={boxStyle}>Box1</div>;
}

export default React.memo(Box2);
