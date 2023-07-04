function onGeoOk(position) {
	const API_KEY = "67ed447ad5ac091333a1781b2d5a2eb5";
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			const name = data.name;
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}
function onFeoError() {
	alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onFeoError);
