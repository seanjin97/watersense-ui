import React from 'react';
import Goalslider from '../components/Goals/goalslider';
import '../components/Goals/style.css';
import { Grid } from '@material-ui/core';

function GoalSetting() {
	return (
		<div className="App" id='main'>
			<Goalslider/>
		</div>
	);
}

export default GoalSetting;
