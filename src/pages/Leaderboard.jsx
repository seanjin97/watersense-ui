import { Button } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledH1 } from '../components/Common/Texts';

function Leaderboard() {
	return (
		<div>
			<div>
				<StyledH1>Landing page</StyledH1>
			</div>
			<div>
				<Link to='/home'>
					<Button>Click to go to home page</Button>
				</Link>
				<Link to='/'>
					<Button>Click to go to landing page</Button>
				</Link>
			</div>
		</div>
	);
}

export default Leaderboard;
