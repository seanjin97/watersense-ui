import React from 'react';
import Monthreview from '../components/Overview/monthreview';
import '../components/Goals/style.css';
import { Grid } from '@material-ui/core';
import logo from '../components/Goals/droplet1.png'

function MonthlyOverview() {
	return (
		<div className="App" id='main'>
			
			<div>
				<Monthreview/>
			</div>
			
		</div>
	);
}

export default MonthlyOverview;
