import React, { useState, useEffect } from 'react';

import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Loading, Text, Button } from '@nextui-org/react';
import styled1 from 'styled-components';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Monthlyslider from './monthlyslider';
import logo from './droplet1.png';
import colors from '../../styles/colors';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

// const ColorButton = styled(Button)(({ theme }) => ({
// 	color: theme.palette.getContrastText(blue[500]),
// 	fontSize: 16,
// 	padding: '6px 12px',
// 	backgroundColor: blue[500],
// 	'&:hover': {
// 		backgroundColor: blue[700],
// 	},
// }));

const CardContainer = styled1.div`
	border-radius: 24px;
	background: ${colors.grey};
	padding: 1em;
	margin: 1em;
`;

const FlexContainer = styled1.div`
	display: flex;
	justify-content: center;
`;

const ContentContainer = styled1(FlexContainer)`
	padding: 1em;
`;

function GoalSetting({ data, goal, setNewGoal, sendGoal, loading, getData }) {
	const navigate = useNavigate();
	if (!data) {
		return <Loading />;
	}
	return (
		// <Box sx={{ width: '100%', borderRadius: '25px' }}>
		// 	<Stack spacing={2} alignItems='center'>
		// 		<Item>
		// 			<Text h3>Monthly Limit</Text>
		// 			<img className='waterlogo' src={logo} width={100} height={100} />
		// 			<Monthlyslider goal={goal} setGoal={setGoal} />
		// 			<ColorButton
		// 				className='monthlySubmit'
		// 				variant='contained'
		// 				onClick={sendGoal}
		// 			>
		// 				Submit
		// 			</ColorButton>
		// 		</Item>
		// 	</Stack>
		// </Box>
		<CardContainer>
			<FlexContainer>
				<Text h5>Set Monthly Water Usage Goal</Text>
			</FlexContainer>
			<FlexContainer className='mt-3'>
				<img className='waterlogo' src={logo} width={100} height={100} />
			</FlexContainer>
			<ContentContainer>
				{data && data.goals && (
					<Monthlyslider goal={goal} setGoal={setNewGoal} />
				)}
			</ContentContainer>

			<FlexContainer>
				<Button
					auto
					flat
					onClick={async () => {
						await sendGoal();
						navigate(0);
					}}
				>
					{loading ? <Loading /> : 'Submit'}
				</Button>
			</FlexContainer>
		</CardContainer>
	);
}

export default GoalSetting;
