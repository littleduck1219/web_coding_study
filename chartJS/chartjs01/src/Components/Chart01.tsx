// import styled from "styled-components";
// import * as Type from "../types";
// import { Chart as Line } from "react-chartjs-2";

// const options = {
// 	responsive: true, // 차트의 크기가 변할 때 자동으로 크기를 조절할 지 여부를 결정한다.
// 	plugins: {
// 		// 범례의 를 위치시기려고 해
// 		legend: {
// 			position: "top" as const,
// 			align: "end" as const,
// 		},
// 		//차트의 머릿말 설정 부분인데 안해도 되잖다.
// 		title: {
// 			display: true,
// 			text: "Chart.js Line Chart",
// 		},
// 	},
// 	scales: {
// 		y: {
// 			beginAtZero: true, // y 축 시작 값을 0으로 설정
// 		},
// 	},
// };

// const data: Type.ChartData = {
// 	labels: ["January", "February", "March", "April", "May", "June", "July"],
// 	datasets: [
// 		{
// 			type: "line",
// 			label: "Dataset 1",
// 			borderColor: "rgb(54, 162, 235)",
// 			borderWidth: 2,
// 			data: [1, 2, 3, 4, 5],
// 		},
// 		{
// 			type: "bar",
// 			label: "Dataset 2",
// 			backgroundColor: "rgb(255, 99, 132)",
// 			data: [1, 2, 3, 4, 5, 6],
// 			borderColor: "red",
// 			borderWidth: 2,
// 		},
// 		{
// 			type: "bar",
// 			label: "Dataset 3",
// 			backgroundColor: "rgb(75, 192, 192)",
// 			data: [1, 2, 3, 4, 5, 6],
// 		},
// 	],
// };

// const Chart01 = () => {
// 	return <Container>{/* <Line options={options} data={data} /> */}</Container>;
// };

// export default Chart01;

// const Container = styled.div`
// 	width: 90vw;
// 	max-width: 900px;
// `;
