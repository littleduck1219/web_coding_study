import React from "react";
import { PolarArea } from "react-chartjs-2"; // PolarArea를 임포트합니다.
import { purchasesChartYearData } from "../data/getYear";
import styled from "styled-components";
import { Chart as ChartJS, RadialLinearScale, ArcElement } from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
			align: "end" as const,
		},
		title: {
			display: true,
			text: "Chart.js PolarArea Chart",
		},
	},
};

const labels = Array.from({ length: 12 }, (_, idx) => `${idx + 1}월`);

export const data = {
	labels,
	datasets: [
		{
			label: "출고신청",
			data: purchasesChartYearData.total.purchase,
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "출고확정",
			data: purchasesChartYearData.total.approve,
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			label: "출고취소",
			data: purchasesChartYearData.total.cancel,
			backgroundColor: "rgba(49, 177, 32, 0.5)",
		},
	],
};

const Chart02 = () => {
	console.log(purchasesChartYearData);

	return (
		<div>
			<h2>TestChart</h2>
			<PolarArea options={options} data={data} /> {/* PolarArea 컴포넌트를 사용합니다. */}
		</div>
	);
};

export default Chart02;

const GraphBox = styled.div`
	position: relative;
	padding: 20px;
`;
