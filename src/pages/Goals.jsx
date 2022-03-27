import React from 'react';
import Goalslider from '../components/Goals/goalslider';
import '../components/Goals/style.css';
import { Grid } from '@material-ui/core';
import logo from '../components/Goals/droplet1.png'

function GoalSetting() {
	return (
		<div className="App" id='main'>
			
			<div>
				<h1 className ="GoalHeading">Monthly Limit</h1>
				{<img className = "waterlogo" src = {logo} width = {100} height = {100}></img>}
				<Goalslider/>
			</div>
			
		</div>
	);
}

export default GoalSetting;
