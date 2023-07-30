import React from "react";
const boxStyle = {
	width: "100px",
	height: "100px",
	backgroundColor: "green",
	color: "white",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
function Box1({ initCount }) {
	console.log("box1이 렌더링 되었습니다.");
	return (
		<div style={boxStyle}>
			<button
				onClick={() => {
					initCount();
				}}>
				Box1
			</button>
		</div>
	);
}

export default React.memo(Box1);
