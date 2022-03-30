import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import HomeTabs from '../components/Home/HomeTabs';
import Recommendation from '../components/Home/Recommendation';
import '../components/Home/style.css';

function Home() {
	// const { state, dispatch } = useGlobalContext();
	const [data, setData] = useState({});
	const [recommendations, setRecommendations] = useState({});
	const getData = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/analytics/detailed/test1`
		);

		const reco = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/recommendations/test1`
		);

		setRecommendations(await reco.json());
		setData(await response.json());
	};

	useEffect(() => {
		if (_.isEmpty(data) && _.isEmpty(recommendations)) {
			getData();
		}
	}, []);

	return (
		<div className='center'>
			<h3>Welcome, User</h3>
			<h5>This is your usage so far</h5>
			<div id='homeTabs'>
				<HomeTabs data={data} />

				<div id='recommendations'>
					<h5>Recommendations</h5>
					<div id='img'>
						<Recommendation recommendations={recommendations} />
					</div>
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
