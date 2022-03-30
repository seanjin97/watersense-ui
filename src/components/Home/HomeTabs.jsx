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
import PieChart from './PieChart';
import BarChart from './BarChart';
import './style.css'; 


import { WEEKLY_MOCK_DATA } from '../database';

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


export default function HomeTabs() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (


		<div className={classes.root} >
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
						<BarChart chartData={WEEKLY_MOCK_DATA} />
					
						<h5>Water Outlets</h5>
					
					<PieChart chartData={WEEKLY_MOCK_DATA}/>
					
					</div>
				</TabPanel>

				<TabPanel value={value} index={1} dir={theme.direction}>
					Monthly
				</TabPanel>

				<TabPanel value={value} index={2} dir={theme.direction}>
					Daily
				</TabPanel>

				
			</SwipeableViews>
		</div>
	);
}
