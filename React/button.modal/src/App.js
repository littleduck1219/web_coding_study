import { LayoutStyle } from "../src/style/GlobalStyle";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select from "./components/Select";

function App() {
	return (
		<LayoutStyle>
			<Button />
			<Input />
			<Modal />
			<Select />
		</LayoutStyle>
	);
}

export default App;
