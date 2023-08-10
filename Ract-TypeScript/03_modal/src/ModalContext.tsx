import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
	isModalOpen: boolean;
	modalContent: string;
	showModal: (content: string) => void;
	hideModal: () => void;
}

interface ModalProviderProps {
	children: React.ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState("");

	const showModal = (content: string) => {
		setIsModalOpen(true);
		setModalContent(content);
	};

	const hideModal = () => {
		setIsModalOpen(false);
		setModalContent("");
	};

	return (
		<ModalContext.Provider value={{ isModalOpen, modalContent, showModal, hideModal }}>
			{children}
		</ModalContext.Provider>
	);
};
