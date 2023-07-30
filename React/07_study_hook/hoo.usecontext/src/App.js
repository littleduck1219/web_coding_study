import Child from "./components/Child";
import Father from "./components/Father";
import GrandFather from "./components/GrandFather";

function App() {
	return (
		<>
			<GrandFather />
			<Father />
			<Child />
		</>
	);
}

export default App;
