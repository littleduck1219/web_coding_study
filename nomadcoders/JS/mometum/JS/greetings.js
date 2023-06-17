// 선택자
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault(); // 기본 기능 차단
	loginForm.classList.add(HIDDEN_CLASSNAME); // hidden class 추가 : input 숨김
	const username = loginInput.value; // input 입력값을 username 으로 저장
	localStorage.setItem(USERNAME_KEY, username); // localStorage에 username 저장
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`; //h1 tag에 text 입력
	greeting.classList.remove(HIDDEN_CLASSNAME); // hidden class 삭제 : greeting 보이게 함
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage에서 user name을 가져옴

if (savedUsername === null) {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the username
	paintGreetings(savedUsername);
}
