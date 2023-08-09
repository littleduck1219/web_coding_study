import React from "react";
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
} from "chart.js";
import { Chart } from "react-chartjs-2"; // Chart를 import 합니다.
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

const labels = Array.from({ length: 12 }, (_, idx) => `${idx + 1}월`);

export const data = {
	labels,
	datasets: [
		{
			type: "line" as const, // 이 데이터셋을 라인 그래프로 그립니다.
			label: "출고신청",
			data: purchasesChartYearData.total.purchase,
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			type: "bar" as const, // 이 데이터셋을 바 그래프로 그립니다.
			label: "출고확정",
			data: purchasesChartYearData.total.approve,
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			type: "bar" as const, // 이 데이터셋을 바 그래프로 그립니다.
			label: "출고취소",
			data: purchasesChartYearData.total.cancel,
			borderColor: "rgb(49, 177, 32)",
			backgroundColor: "rgba(49, 177, 32, 0.5)",
		},
	],
};

const Chart02 = () => {
	console.log(purchasesChartYearData);

	return (
		<div>
			<h2>TestChart</h2>
			<Chart type='bar' options={options} data={data} />
		</div>
	);
};

export default Chart02;

const GraphBox = styled.div`
	position: relative;
	padding: 20px;
`;
