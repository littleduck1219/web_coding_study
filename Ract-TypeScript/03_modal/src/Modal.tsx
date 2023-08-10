import React from "react";
import { useModal } from "./ModalContext";

const Modal: React.FC = () => {
	const { isModalOpen, modalContent, hideModal } = useModal();

	if (!isModalOpen) return null;

	return (
		<div
			style={{
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				backgroundColor: "white",
				padding: "20px",
				zIndex: 1000,
			}}>
			<p>{modalContent}</p>
			<button onClick={hideModal}>닫기</button>
		</div>
	);
};

export default Modal;
