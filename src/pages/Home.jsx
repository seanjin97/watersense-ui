import React from 'react';
import HomeTabs from '../components/Home/HomeTabs';
import Recommendation from '../components/Home/Recommendation';
import '../components/Home/style.css';

function Home() {
	// const { state, dispatch } = useGlobalContext();

	return (
		<div className='center'>
			<div className='center mt-5'>
				<h3>Welcome, User</h3>
				<h5>This is your usage so far</h5>
				<HomeTabs />

				<div className='center'>
					<Recommendation />
				</div>
			</div>
			<div>
				{/* Count: {state.counter}
				<Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
				<Button onClick={() => dispatch({ type: 'decrement' })}>-</Button> */}
			</div>
		</div>
	);
}

export default Home;
