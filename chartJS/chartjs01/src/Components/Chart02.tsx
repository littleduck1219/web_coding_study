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
import { Bar } from "react-chartjs-2"; // Line 대신 Bar를 import 합니다.
import { purchasesChartYearData } from "../data/getYear";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend); // LineElement 대신 BarElement를 등록합니다.

const options = {
	responsive: true, // 차트의 크기가 변할 때 자동으로 크기를 조절할 지 여부를 결정한다.
	plugins: {
		// 범례의 를 위치시기려고 해
		legend: {
			position: "top" as const,
			align: "end" as const,
		},
		//차트의 머릿말 설정 부분인데 안해도 되잖다.
		title: {
			display: true,
			text: "Chart.js Line Chart",
		},
	},
	scales: {
		y: {
			beginAtZero: true, // y 축 시작 값을 0으로 설정
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
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "출고확정",
			data: purchasesChartYearData.total.approve,
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
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
			<Bar options={options} data={data} />
		</div>
	);
};

export default Chart02;

const GraphBox = styled.div`
	position: relative;
	padding: 20px;
`;
