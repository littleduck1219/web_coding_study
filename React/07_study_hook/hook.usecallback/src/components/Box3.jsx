import React from "react";
const boxStyle = {
	width: "100px",
	height: "100px",
	backgroundColor: "red",
	color: "white",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
function Box3() {
	console.log("box3이 렌더링 되었습니다.");
	return (
		<div style={boxStyle}>
			<button>Box1</button>
		</div>
	);
}

export default React.memo(Box3);
