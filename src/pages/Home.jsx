import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import HomeTabs from '../components/Home/HomeTabs';
import Recommendation from '../components/Home/Recommendation';
import '../components/Home/style.css';
import { Container, Spacer } from '@nextui-org/react';
import styled from 'styled-components';
import FullScreenLoading from '../components/Common/FullScreenLoading';

const HeaderContainer = styled.div`
	margin: 1em;
`;
function Home() {
	// const { state, dispatch } = useGlobalContext();
	const [data, setData] = useState({});
	const [recommendations, setRecommendations] = useState({});
	const getData = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/analytics/detailed/smartcitizen22`
		);

		setData(await response.json());
	};

	const getRecommendations = async () => {
		const reco = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/recommendations/smartcitizen22`
		);

		setRecommendations(await reco.json());
	};

	useEffect(() => {
		if (_.isEmpty(data) && _.isEmpty(recommendations)) {
			getData();
		}
	}, []);

	useEffect(() => {
		if (_.isEmpty(recommendations)) {
			getRecommendations();
		}
	});

	if (_.isEmpty(recommendations || _.isEmpty(data))) {
		return <FullScreenLoading />;
	}
	console.log(recommendations);
	return (
		<div className='center'>
			<HeaderContainer>
				<h3>Welcome, smartcitizen22 👋</h3>
				<h5>This is your usage so far...</h5>
			</HeaderContainer>

			<div id='homeTabs'>
				<HomeTabs data={data} />
			</div>

			<Recommendation recommendations={recommendations} />

			<Spacer y={3} />
		</div>
	);
}

export default Home;
