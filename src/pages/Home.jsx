import { Button } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledH1 } from '../components/Common/Texts';
import { useGlobalContext } from '../store/reducer';

function Home() {
	const { state, dispatch } = useGlobalContext();

	return (
		<div>
			<div>
				<StyledH1>Home page</StyledH1>
			</div>
			<div>
				<Link to='/'>
					<Button>Click to go to landing page</Button>
				</Link>
				<Link to='/leaderboard'>
					<Button>Click to go to leaderboard page</Button>
				</Link>
			</div>
			<div>
				Count: {state.counter}
				<Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
				<Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
			</div>
		</div>
	);
}

export default Home;
