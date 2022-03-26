import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Link } from 'react-router-dom';
import { StyledH1 } from '../components/Common/Texts';
import { useGlobalContext } from '../store/reducer';
import { Paper } from '@material-ui/core';

// import { BarChart } from '../components/Home/barChart';
import { Bar } from "react-chartjs-2";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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

// function BarChart(chartData)  {
// 	return (
// 	  <div>
// 		<Bar
// 		  data={chartData}
// 		  options={{
// 			plugins: {
// 			  title: {
// 				display: true,
// 				text: "Cryptocurrency prices"
// 			  },
// 			  legend: {
// 				display: true,
// 				position: "bottom"
// 			 }
// 			}
// 		  }}
// 		/>
// 	  </div>
// 	)
// };

// const chartData = {
//   labels: labels,
//   datasets: [{
//     label: 'Price in USD',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };

export default function FullWidthTabs() {
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
	  <div>
		  <div>
		  		<h3>Welcome, User</h3>
 				<h5>This is your usage so far</h5>
		  </div>
			<div className={classes.root}>
			<Paper>

			{/* <AppBar position="static" color="default"> */}
			<Tabs
			value={value}
			onChange={handleChange}
			indicatorColor="primary"
			textColor="primary"
			variant="fullWidth"
			aria-label="full width tabs example"
			>
			<Tab label="Item One" {...a11yProps(0)} />
			<Tab label="Item Two" {...a11yProps(1)} />
			<Tab label="Item Three" {...a11yProps(2)} />
			</Tabs>
			</Paper>

			{/* </AppBar> */}
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					{/* <BarChart chartData={chartData} /> */}
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
				Item Two
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
				Item Three
				</TabPanel>
			</SwipeableViews>
			</div>
	  </div>
    
  );
}




// import { Button } from '@nextui-org/react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { StyledH1 } from '../components/Common/Texts';
// import { FullWidthTabs } from '../components/Home/HomeTabs';
// import { useGlobalContext } from '../store/reducer';



// function Home() {
// 	// const { state, dispatch } = useGlobalContext();

// 	return (
// 		<div>
// 			<div>
// 				<StyledH1>Home page</StyledH1>
// 			</div>
// 			<div>
// 				<h3>Welcome, User</h3>
// 				<h5>This is your usage so far</h5>
// 				<FullWidthTabs />
// 				{/* <Link to='/'>
// 					<Button>Click to go to landing page</Button>
// 				</Link>
// 				<Link to='/leaderboard'>
// 					<Button>Click to go to leaderboard page</Button>
// 				</Link> */}
// 			</div>
// 			<div>
// 				{/* Count: {state.counter}
// 				<Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
// 				<Button onClick={() => dispatch({ type: 'decrement' })}>-</Button> */}
// 			</div>
// 		</div>
// 	);
// }

// export default Home;
