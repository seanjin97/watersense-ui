import { Button } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledH1 } from '../components/Common/Texts';

function Landing() {
	return (
		<div>
			<div>
				<StyledH1>Landing page</StyledH1>
			</div>
			<div>
				<Link to='/home'>
					<Button>Click to go to home page</Button>
				</Link>
				<Link to='/leaderboard'>
					<Button>Click to go to leaderboard page</Button>
				</Link>
			</div>
		</div>
	);
}

export default Landing;
