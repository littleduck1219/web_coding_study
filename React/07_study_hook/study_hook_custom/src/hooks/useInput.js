import { useState } from "react";

const UserInput = () => {
	// [state];
	const [value, setValue] = useState("");

	// [ handler]
	const handler = (e) => {
		setValue(e.target.value);
	};

	return [value, handler];
};

export default UserInput;
