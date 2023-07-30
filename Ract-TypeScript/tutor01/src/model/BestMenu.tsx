import React from "react";
import { Menu } from "./restaurant";

interface OwnProps extends Menu {
	showBestMenuName(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({ name, category, price }) => {
	return <div>{name}</div>;
};

export default BestMenu;
