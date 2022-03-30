import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Chart from 'chart.js/auto';
import { Loading } from '@nextui-org/react';
import PieChart from './PieChart';
import BarChart from './barChart';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 500,
	},
}));

export default function HomeTabs({ data }) {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	console.log(data);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const weeklyChartData = data.dmy
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.dmy.weekly.map((item) => item.date),
				datasets: [
					{
						label: 'Amount of Water Used',
						data: data.dmy.weekly.map((item) => item.total_usage / 1000),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1,
					},
				],
		  }
		: null;

	const monthlyChartData = data.dmy
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.dmy.monthly.map((item) => item.date),
				datasets: [
					{
						label: 'Amount of Water Used',
						data: data.dmy.monthly.map((item) => item.total_usage / 1000),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1,
					},
				],
		  }
		: null;
	const dailyChartData = data.dmy
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.dmy.daily.map((item) => item.date),
				datasets: [
					{
						label: 'Amount of Water Used',
						data: data.dmy.daily.map((item) => item.total_usage / 1000),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1,
					},
				],
		  }
		: null;

	const weeklyPieData = data.sensor
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.sensor.weekly.map((item) => item.device),
				datasets: [
					{
						label: 'Amount of Water Used',
						data: data.sensor.weekly.map((item) => item.total_usage / 1000),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1,
					},
				],
		  }
		: null;

	const monthlyPieData = data.sensor
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.sensor.monthly.map((item) => item.device),
				datasets: [
					{
						label: 'Amount of Water Used',
						data: data.sensor.monthly.map((item) => item.total_usage / 1000),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1,
					},
				],
		  }
		: null;

	const dailyPieData = data.sensor
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.sensor.daily.map((item) => item.device),
				datasets: [
					{
						label: 'Amount of Water Used',
						data: data.sensor.daily.map((item) => item.total_usage / 1000),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 1,
					},
				],
		  }
		: null;
	return (
		<div className={classes.root}>
			<Paper>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='fullWidth'
					aria-label='full width tabs example'
				>
					<Tab label='Weekly' {...a11yProps(0)} />
					<Tab label='Monthly' {...a11yProps(1)} />
					<Tab label='Daily' {...a11yProps(2)} />
				</Tabs>
			</Paper>

			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<h5>Weekly</h5>
					{data.dmy ? (
						<BarChart chartData={weeklyChartData} />
					) : (
						<div className='d-flex justify-content-center'>
							<Loading />
						</div>
					)}
					<div>
						<h5>Water Outlets</h5>
					</div>
					{data.sensor ? (
						<PieChart chartData={weeklyPieData} />
					) : (
						<div className='d-flex justify-content-center'>
							<Loading />
						</div>
					)}
				</TabPanel>

				<TabPanel value={value} index={1} dir={theme.direction}>
					<h5>Monthly</h5>
					{data.dmy ? (
						<BarChart chartData={monthlyChartData} />
					) : (
						<div className='d-flex justify-content-center'>
							<Loading />
						</div>
					)}
					<div>
						<h5>Water Outlets</h5>
					</div>
					{data.sensor ? (
						<PieChart chartData={monthlyPieData} />
					) : (
						<div className='d-flex justify-content-center'>
							<Loading />
						</div>
					)}
				</TabPanel>

				<TabPanel value={value} index={2} dir={theme.direction}>
					<h5>Daily</h5>
					{data.dmy ? (
						<BarChart chartData={dailyChartData} />
					) : (
						<div className='d-flex justify-content-center'>
							<Loading />
						</div>
					)}
					<div>
						<h5>Water Outlets</h5>
					</div>
					{data.sensor ? (
						<PieChart chartData={dailyPieData} />
					) : (
						<div className='d-flex justify-content-center'>
							<Loading />
						</div>
					)}
				</TabPanel>
			</SwipeableViews>
		</div>
	);
}
