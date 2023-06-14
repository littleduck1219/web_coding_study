const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
	console.log("title was clicked!");
	title.style.color = "blue";
}

function handleMouseEnter() {
	console.log("mouse is here!");
}

function handleMouseLeave() {
	console.log("mouse is leave!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
