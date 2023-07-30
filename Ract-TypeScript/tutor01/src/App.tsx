import React, { useState } from "react";
import Store from "./components/Store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./model/BestMenu";

let data: Restaurant = {
	name: "누나네 식당",
	category: "western",
	address: {
		city: "incheon",
		detail: "somewhere",
		zipCode: 23425634,
	},
	menu: [
		{ name: "rose pasta", price: 2000, category: "PASTA" },
		{ name: "steak", price: 3000, category: "PASTA" },
		{ name: "salad", price: 2000, category: "PASTA" },
	],
};

const showBestMenuName = (name: string) => {
	return name;
};

const App: React.FC = () => {
	const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

	const changeAddress = (address: Address) => {
		setMyRestaurant({ ...myRestaurant, address: address });
	};
	return (
		<div className='App'>
			<Store info={myRestaurant} changeAddress={changeAddress} />
			<BestMenu name='불고기 피자' category='pizza' price={1000} showBestMenuName={showBestMenuName} />
		</div>
	);
};

export default App;

msw 타입정의