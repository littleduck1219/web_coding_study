import React from "react";
import { ModalProvider, useModal } from "./ModalContext";
import Modal from "./Modal";

const App: React.FC = () => {
	const { showModal } = useModal();

	return (
		<div>
			<button onClick={() => showModal("안녕하세요, 모달입니다!")}>모달 열기</button>
			<Modal />
		</div>
	);
};

const Root: React.FC = () => {
	return (
		<ModalProvider>
			<App />
		</ModalProvider>
	);
};

export default Root;
