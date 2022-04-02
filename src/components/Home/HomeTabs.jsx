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
import './style.css';
import colors from '../../styles/colors';

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
	},
}));

export default function HomeTabs({ data }) {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

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
						type: 'bar',
						label: 'Amount of water used (L)',
						data: data.dmy.weekly.map((item) => item.total_usage / 1000),
						backgroundColor: [colors.blue.lighterest],
						borderColor: [colors.blue.lighterest],
					},
					{
						type: 'line',
						label: 'Amount of water used (L)',
						data: data.dmy.weekly.map((item) => item.total_usage / 1500),
						fill: false,
						borderColor: [colors.blue.darker],
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
						label: 'Amount of Water Used (L)',
						data: data.dmy.monthly.map((item) => item.total_usage / 1000),
						backgroundColor: [colors.blue.lighterest],
						borderColor: [colors.blue.lighterest],
					},
					{
						type: 'line',
						label: 'Amount of water used (L)',
						data: data.dmy.monthly.map((item) => item.total_usage / 1500),
						fill: false,
						borderColor: [colors.blue.darker],
					},
				],
		  }
		: null;
	const dailyChartData = data.dmy
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.dmy.daily.map((item) => `${item.hour}:00H`),
				datasets: [
					{
						label: 'Amount of Water Used (L)',
						data: data.dmy.daily.map((item) => item.total_usage / 1000),
						backgroundColor: [colors.blue.lighterest],
						borderColor: [colors.blue.lighterest],
					},
					{
						type: 'line',
						label: 'Amount of water used (L)',
						data: data.dmy.daily.map((item) => item.total_usage / 1500),
						fill: false,
						borderColor: [colors.blue.darker],
					},
				],
		  }
		: null;

	const weeklyPieData = data.sensor
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.sensor.weekly.map(
					(item) => `${item.device} water usage (L)`
				),
				datasets: [
					{
						label: 'Amount of Water Used (L)',
						data: data.sensor.weekly.map((item) => item.total_usage / 1000),
						backgroundColor: [
							colors.blue.darkest,
							colors.blue.darkerer,
							colors.blue.darker,
							colors.blue.lighter,
							colors.blue.lighterer,
							colors.blue.lightest,
							colors.blue.lighterest,
						],
						borderColor: [
							colors.blue.darkest,
							colors.blue.darkerer,
							colors.blue.darker,
							colors.blue.lighter,
							colors.blue.lighterer,
							colors.blue.lightest,
							colors.blue.lighterest,
						],
						borderWidth: 1,
					},
				],
		  }
		: null;

	const monthlyPieData = data.sensor
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.sensor.monthly.map(
					(item) => `${item.device} water usage (L)`
				),
				datasets: [
					{
						label: 'Amount of Water Used (L)',
						data: data.sensor.monthly.map((item) => item.total_usage / 1000),
						backgroundColor: [
							colors.blue.darkest,
							colors.blue.darkerer,
							colors.blue.darker,
							colors.blue.lighter,
							colors.blue.lighterer,
							colors.blue.lightest,
							colors.blue.lighterest,
						],
						borderColor: [
							colors.blue.darkest,
							colors.blue.darkerer,
							colors.blue.darker,
							colors.blue.lighter,
							colors.blue.lighterer,
							colors.blue.lightest,
							colors.blue.lighterest,
						],
						borderWidth: 1,
					},
				],
		  }
		: null;

	const dailyPieData = data.sensor
		? {
				// eslint-disable-next-line react/prop-types
				labels: data.sensor.daily.map(
					(item) => `${item.device} water usage (L)`
				),
				datasets: [
					{
						label: 'Amount of Water Used (L)',
						data: data.sensor.daily.map((item) => item.total_usage / 1000),
						backgroundColor: [
							colors.blue.darkest,
							colors.blue.darkerer,
							colors.blue.darker,
							colors.blue.lighter,
							colors.blue.lighterer,
							colors.blue.lightest,
							colors.blue.lighterest,
						],
						borderColor: [
							colors.blue.darkest,
							colors.blue.darkerer,
							colors.blue.darker,
							colors.blue.lighter,
							colors.blue.lighterer,
							colors.blue.lightest,
							colors.blue.lighterest,
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
					<div className='centerHomeTab'>
						<h5>Weekly</h5>
						{data.dmy ? (
							<BarChart
								yAxis='Litres'
								xAxis='Date'
								chartData={weeklyChartData}
							/>
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
					</div>
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
