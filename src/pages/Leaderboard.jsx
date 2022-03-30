import React from 'react';
import Board from '../components/Leaderboard/board';
import '../components/Leaderboard/style.css';
import { Grid } from '@material-ui/core';

function Leaderboard() {
	return (
		<div className="App" id='main'>
			<Board/>
		</div>
	);
}

export default Leaderboard;
