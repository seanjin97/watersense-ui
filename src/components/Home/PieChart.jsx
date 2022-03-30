import React from 'react';
import { Pie } from 'react-chartjs-2';


export default function PieChart( {chartData} ) {
	return (
		<div>
			<Pie
				data={chartData}
				height={400}
				width={600}
				options={{
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
					legend: {
						labels: {
							fontSize: 25,
						},
					},
				}}
			/>
		</div>
	);
}
