import * as React from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import "./App.css";

function getItems(nextGroupKey, count) {
	const nextItems = [];
	const nextKey = nextGroupKey * count;
	for (let i = 0; i < count; ++i) {
		nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
	}
	return nextItems;
}
const Item = ({ num }) => (
	<div className='item'>
		<div className='innerItem'>
			<img
				src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`}
				alt='egjs'
				style={{
					maxWidth: "100%",
					borderRadius: "20px",
				}}
			/>
		</div>
	</div>
);
export default function App() {
	const [items, setItems] = React.useState(() => getItems(0, 10));
	return (
		<MasonryInfiniteGrid
			className='container'
			align='center'
			// gap={1}
			onRequestAppend={(e) => {
				const nextGroupKey = (+e.groupKey || 0) + 1;
				setItems([...items, ...getItems(nextGroupKey, 10)]);
			}}>
			{items.map((item) => (
				<Item data-grid-groupkey={item.groupKey} key={item.key} num={item.key} />
			))}
		</MasonryInfiniteGrid>
	);
}
