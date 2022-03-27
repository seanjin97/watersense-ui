import React from 'react';
import Goalslider from '../components/Goals/goalslider';
import '../components/Goals/style.css';
import { Grid } from '@material-ui/core';

function GoalSetting() {
	return (
		<div className="App" id='main'>
			
			<h1 className ="GoalHeading">Monthly Consumption Limit</h1>
			<Goalslider/>
		</div>
	);
}

export default GoalSetting;
