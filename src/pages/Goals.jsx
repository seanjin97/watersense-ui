import React from 'react';
import '../components/Goals/style.css';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// import Goalslider from '../components/Goals/goalslider';
import Monthlyslider from '../components/Goals/monthlyslider';
import Weeklyslider from '../components/Goals/weeklyslider';
import logo from '../components/Goals/droplet1.png';

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
	return (
		<Box sx={{ width: '100%' }}>
			<Stack spacing={2} alignItems='center'>
				<Item>
					<h1 className='GoalHeading'>Monthly Limit</h1>
					<img className='waterlogo' src={logo} width={100} height={100} />
					<Monthlyslider />
					<ColorButton className='monthlySubmit' variant='contained'>
						Submit
					</ColorButton>
				</Item>
				<Item>
					<h1 className='GoalHeading'>Weekly Limit</h1>
					<img className='waterlogo' src={logo} width={100} height={100} />
					<Weeklyslider />
					<ColorButton className='weeklySubmit' variant='contained'>
						Submit
					</ColorButton>
				</Item>
			</Stack>
		</Box>
		/*
		<div className='App' id='main'>
			<div>
				<h1 className='GoalHeading'>Monthly Limit</h1>
				<img className='waterlogo' src={logo} width={100} height={100} />
				<Goalslider />
				<ColorButton variant='contained'>Submit</ColorButton>
			</div>
		</div>
		*/
	);
}

export default GoalSetting;
