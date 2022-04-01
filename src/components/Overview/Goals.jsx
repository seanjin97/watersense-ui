import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Monthlyslider from './monthlyslider';
import logo from './droplet1.png';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(blue[500]),
	fontSize: 16,
	padding: '6px 12px',
	backgroundColor: blue[500],
	'&:hover': {
		backgroundColor: blue[700],
	},
}));

function GoalSetting() {
	const [goal, setGoal] = useState(0);
	const sendGoal = async () => {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/goals`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: 'test1', month: goal }),
		});
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Stack spacing={2} alignItems='center'>
				<Item>
					<h1 className='GoalHeading'>Monthly Limit</h1>
					<img className='waterlogo' src={logo} width={100} height={100} />
					<Monthlyslider goal={goal} setGoal={setGoal} />
					<ColorButton
						className='monthlySubmit'
						variant='contained'
						onClick={sendGoal}
					>
						Submit
					</ColorButton>
				</Item>
			</Stack>
		</Box>
	);
}

export default GoalSetting;
