import React, { useEffect, useRef, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartData, // 여기에 ChartData를 임포트합니다.
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { purchasesChartYearData } from "../data/getYear";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
			align: "end" as const,
		},
		title: {
			display: true,
			text: "Chart.js Line Chart",
		},
	},
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};

const data = (canvas: HTMLCanvasElement | null): ChartData => {
	if (!canvas)
		return {
			labels: [],
			datasets: [],
		};

	const ctx = canvas.getContext("2d");
	let gradient: CanvasGradient | null = null;
	if (ctx) {
		gradient = ctx.createLinearGradient(0, 0, 0, 400);
		gradient.addColorStop(0, "rgba(75, 192, 192, 0.4)");
		gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
	}

	return {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "My First dataset",
				tension: 0.5,
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: true,
				backgroundColor: gradient ? gradient : "rgba(75, 192, 192, 0.4)",
			},
		],
	};
};
const Chart02 = () => {
	console.log(purchasesChartYearData);

	// useRef를 사용하여 canvas 요소에 대한 참조를 가져옵니다.
	const canvasRef = useRef(null);

	// useEffect 내에서 gradient를 생성하고, 상태를 설정합니다.
	const [chartData, setChartData] = useState<ChartData>({
		labels: [],
		datasets: [],
	});

	useEffect(() => {
		if (canvasRef.current) {
			const generatedData = data(canvasRef.current);
			setChartData(generatedData);
		}
	}, []);

	return (
		<div>
			<h2>TestChart</h2>
			<Chart ref={canvasRef} type='line' options={options} data={chartData} />
		</div>
	);
};

export default Chart02;

const GraphBox = styled.div`
	position: relative;
	padding: 20px;
`;
