import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
	{
		value: 0,
		label: '0L',
	},
	{
		value: 30000,
		label: '30000L',
	},
];

function valuetext(value) {
	return `${value}L`;
}

export default function DiscreteSliderMarks({ goal, setGoal }) {
	return (
		<Box sx={{ width: 300 }}>
			<Slider
				onChange={(e) => setGoal(e.target.value * 1000)}
				aria-label='Custom marks'
				min={0}
				max={30000}
				defaultValue={0}
				getAriaValueText={valuetext}
				valueLabelDisplay='auto'
				marks={marks}
				value={goal / 1000}
			/>
		</Box>
	);
}
