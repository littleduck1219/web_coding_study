import React from "react";
import Todoinput from "../components/Todoinput";
import Todocontent from "../components/Todocontent";
import { useState } from "react";
import Mousemover from "../components/Mousemover";

function Todopage() {
	return (
		<div>
			<Mousemover />
			<Todoinput />
			<Todocontent set={false} />
			<Todocontent set={true} />
		</div>
	);
}

export default Todopage;
