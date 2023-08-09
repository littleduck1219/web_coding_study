type LineDataset = {
	type: "line";
	label: string;
	borderColor?: string;
	borderWidth?: number;
	data: number[];
	backgroundColor?: string;
};

type BarDataset = {
	type: "bar";
	label: string;
	backgroundColor?: string;
	data: number[];
	borderColor?: string;
	borderWidth?: number;
};

type ChartData = {
	labels: string[];
	datasets: (LineDataset | BarDataset)[];
};

export { ChartData, LineDataset, BarDataset };
