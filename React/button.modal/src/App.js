import { LayoutStyle } from "../src/style/GlobalStyle";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select2 from "./components/Select2";
import Select from "./components/Select";
// import Button1 from "./components/Button1";

function App() {
	return (
		<LayoutStyle>
			<Button />
			<Input />
			<Modal />
			<Select />
			<Select2 />
			{/* <Button1 /> */}
		</LayoutStyle>
	);
}

export default App;
