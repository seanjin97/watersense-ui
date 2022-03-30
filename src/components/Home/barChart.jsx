import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart({ chartData }) {
	return (
		<div>
			<Bar
				data={chartData}
				height={400}
				width={600}
				options={{
					maintainAspectRatio: false,
					scales: { // need to check scales issues
						xAxis: [
							{
								gridLines: {
									display: false,
								},
							},
						],
						yAxis: [
							{
								ticks: {
									beginAtZero: true,
								},
								gridLines: {
									display: false,
								}
							},
						],
					},
				}}
			/>
		</div>
	);
}
