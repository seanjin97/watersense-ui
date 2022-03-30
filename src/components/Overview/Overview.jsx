import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import icon from '../Overview/waterheart.png';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	background: theme.palette.info.light,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	width: '500px',
}));

const monthLimit = 'Exceeded';
const userMonCon = '22000';
const monConLimit = '20000';
const numDaysExceed = '5';
const numDaysMonth = '31';



function MonthlyOverview({data}) {
	console.log(data)
	return (
		<Box sx={{ width: '100%' }}>
			<Stack spacing={2} alignItems='center'>
				<h2>March 2022 Overview</h2>
				<Item>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<img className='watericon' src={icon} width={100} height={100} />
						</Grid>
						<Grid item xs={8}>
							<h4>Total Water Consumption</h4>
							<h5>{`Monthly Limit ${monthLimit}`}</h5>
							<h5>{`${data.prev_month_usage /1000} Litres / ${data.prev_month_goal/ 1000} Litres`}</h5>
						</Grid>
					</Grid>
				</Item>
				<Item>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<img className='watericon' src={icon} width={100} height={100} />
						</Grid>
						<Grid item xs={8}>
							<br />
							<h4>Daily Limit Exceeded</h4>
							<h3>{`${data.num_days_exceeded} / ${data.num_days_in_prev_month} Days`}</h3>
						</Grid>
					</Grid>
				</Item>
			</Stack>
		</Box>
	);
}

export default MonthlyOverview;
