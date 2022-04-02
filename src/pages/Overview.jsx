import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Spacer, Text } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import Overview from '../components/Overview/Overview';
import Goals from '../components/Overview/Goals';
import FullScreenLoading from '../components/Common/FullScreenLoading';

const MainContainer = styled.div`
	margin: 2em 1em 1em 1em;
`;

const HeaderContainer = styled.div`
	float: left;
`;

function MonthlyOverview() {
	const [data, setData] = useState({});
	const [newGoal, setNewGoal] = useState(0);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const getData = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/analytics/overview/test1`
		);
		const res = await response.json();
		setData(res);
		setNewGoal(res.goals.monthly);
	};

	const sendGoal = async () => {
		setLoading(true);
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/goals`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: 'test1', month: newGoal }),
		});
		if ((await response.status) === 200) {
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	if (_.isEmpty(data)) {
		return <FullScreenLoading />;
	}
	return (
		<MainContainer>
			<HeaderContainer>
				<i className='fa-solid fa-chevron-left' onClick={() => navigate(-1)} />
			</HeaderContainer>

			<Text weight='bold' h4 css={{ textAlign: 'center' }}>
				Month Overview
			</Text>
			<Spacer y={3} />
			<Overview data={data} />
			<Goals
				data={data}
				goal={newGoal}
				setNewGoal={setNewGoal}
				sendGoal={sendGoal}
				loading={loading}
				getData={getData}
			/>
		</MainContainer>
	);
}

export default MonthlyOverview;
