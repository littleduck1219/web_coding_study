import React from "react";

function Header() {
	console.log("activate: Header");
	return (
		<header className='header'>
			<span>My Todo List</span>
			<span>React</span>
		</header>
	);
}

export default Header;
