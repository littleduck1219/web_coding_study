// import React, { useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import ChartJS from "chart.js";

// function GradientLineChart() {
// 	useEffect(() => {
// 		ChartJS.plugins.register({
// 			beforeDraw: (chart) => {
// 				const ctx = chart.canvas.getContext("2d");
// 				const gradient = ctx.createLinearGradient(0, 0, 0, 400);
// 				gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
// 				gradient.addColorStop(1, "rgba(255, 0, 0, 0.05)");
// 				const dataset = chart.data.datasets[0];
// 				dataset.backgroundColor = gradient;
// 			},
// 		});
// 	}, []);

// 	const data = {
// 		labels: ["January", "February", "March", "April", "May", "June", "July"],
// 		datasets: [
// 			{
// 				label: "My First dataset",
// 				data: [65, 59, 80, 81, 56, 55, 40],
// 				fill: true,
// 			},
// 		],
// 	};

// 	return <Line data={data} />;
// }

// export default GradientLineChart;
