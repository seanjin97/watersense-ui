/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components';
import { Loading, Spacer, Text, Tooltip } from '@nextui-org/react';
import _ from 'lodash';
import { firstN } from '../../utils/utils';
import colors from '../../styles/colors';
import icons from '../../styles/icons';

const MainContainer = styled.div`
	border-radius: 24px;
	background: ${colors.grey};
	padding: 1em;
	margin: 1em;
	position: relative;
`;

const HoverArrowRightContainer = styled.div`
	position: absolute;
	right: 0;
	bottom: 50%;
`;
const HoverArrowLeftContainer = styled.div`
	position: absolute;
	left: 0;
	bottom: 50%;
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const RecommendationsContainer = styled(FlexContainer)``;

const RecommendationItem = styled.div`
	padding: 1em;
	text-align: center;
`;

function Recommendation({ recommendations }) {
	const [index, setIndex] = useState(true);
	let monthlyGoalsRecommendations = null;
	let peerRecommendations = null;
	let userUsage = null;
	let peerUsage = null;
	if (
		recommendations &&
		recommendations.user_usage &&
		recommendations.monthly_goal_comparison &&
		recommendations.monthly_goal_comparison.statistics_recommendations &&
		recommendations.peer_comparison &&
		recommendations.peer_comparison.peers &&
		recommendations.peer_comparison.peer_recommendations
	) {
		monthlyGoalsRecommendations = firstN(
			recommendations.monthly_goal_comparison.statistics_recommendations,
			3
		);
		peerRecommendations = firstN(
			recommendations.peer_comparison.peer_recommendations,
			3
		);
		userUsage = recommendations.user_usage;
		peerUsage = recommendations.peer_comparison.peers;
		console.log(recommendations);
	}

	if (_.isEmpty(recommendations)) {
		return (
			<FlexContainer>
				<Loading />
			</FlexContainer>
		);
	}

	return (
		<>
			<h5 className='mx-4'>
				Recommendations:
				{index ? (
					<Tooltip
						placement='topEnd'
						rounded
						content='You have exceeded your monthly goals. Watersense has compared your water usage in the previous month with national statistics to generate these recommendations.'
					>
						<Text
							span
							css={{
								background: colors.blue.lightest,
								textDecoration: 'underline',
							}}
						>
							Based on national data
							<i
								className='fa-solid fa-circle-info fa-2xs'
								style={{ color: colors.blue.lighter }}
							/>
						</Text>
					</Tooltip>
				) : (
					<Tooltip
						placement='topEnd'
						rounded
						content='Watersense has compared your water usage in the previous month with the performance of other peers to generate these recommendations.'
					>
						<Text
							span
							css={{
								background: colors.blue.lighter,
								textDecoration: 'underline',
							}}
						>
							Based on peer performance
							<i className='fa-solid fa-circle-info fa-2xs' />
						</Text>
					</Tooltip>
				)}
			</h5>
			<MainContainer>
				{index && (
					<HoverArrowRightContainer>
						<i className='fa-solid fa-chevron-right' />
					</HoverArrowRightContainer>
				)}
				{!index && (
					<HoverArrowLeftContainer>
						<i className='fa-solid fa-chevron-left' />
					</HoverArrowLeftContainer>
				)}

				<Text
					css={{
						background: colors.blue.darkest,
						color: colors.offWhite,
						padding: '10px',
					}}
					h5
					align='center'
					transform='uppercase'
				>
					Ways to save water in your home
				</Text>

				<SwipeableViews
					animateHeight
					enableMouseEvents
					onChangeIndex={() => setIndex(!index)}
				>
					<div>
						{monthlyGoalsRecommendations ? (
							Object.keys(monthlyGoalsRecommendations).map((key) => (
								<RecommendationItem key={key}>
									<FlexContainer className='my-3'>
										<i className={icons[key]} />
									</FlexContainer>

									<Text size={14}>
										{
											recommendations.monthly_goal_comparison
												.statistics_recommendations[key]
										}
									</Text>
									<Spacer />
									<Text size={14} css={{ background: colors.blue.lightest }}>
										High usage in the{' '}
										<Text
											span
											weight='bold'
											css={{
												color: colors.primaryRed,
											}}
										>
											{key}(s)
										</Text>{' '}
										with{' '}
										<Text span weight='bold' css={{ color: colors.primaryRed }}>
											{Math.round(
												(userUsage[key].total_usage / 1000 + Number.EPSILON) *
													100
											) / 100}
											L
										</Text>{' '}
										used last month. The national average is{' '}
										<Text
											span
											weight='bold'
											css={{ color: colors.secondaryBlue }}
										>
											{Math.round(
												(recommendations.monthly_goal_comparison
													.national_monthly_statistics[key] /
													1000 +
													Number.EPSILON) *
													100
											) / 100}
											L
										</Text>
									</Text>
								</RecommendationItem>
							))
						) : (
							<Loading />
						)}
					</div>
					<div>
						{peerRecommendations ? (
							Object.keys(peerRecommendations).map((key) => (
								<RecommendationItem>
									<FlexContainer className='my-3'>
										<i className={icons[key]} />
									</FlexContainer>

									<Text small>
										{recommendations.peer_comparison.peer_recommendations[key]}
									</Text>
									<Spacer />
									<Text size={14} css={{ background: colors.blue.lightest }}>
										You used{' '}
										<Text span weight='bold' css={{ color: colors.primaryRed }}>
											{Math.round(
												(userUsage[key].total_usage / 1000 + Number.EPSILON) *
													100
											) / 100}
											L
										</Text>{' '}
										of water in the{' '}
										<Text
											span
											weight='bold'
											css={{
												color: colors.primaryRed,
											}}
										>
											{key}(s)
										</Text>{' '}
										last month. The average of your peers is{' '}
										<Text
											span
											weight='bold'
											css={{ color: colors.secondaryBlue }}
										>
											{Math.round(
												(recommendations.peer_comparison.peers[key]
													.average_total_usage /
													1000 +
													Number.EPSILON) *
													100
											) / 100}
											L
										</Text>
									</Text>
								</RecommendationItem>
							))
						) : (
							<Loading />
						)}
					</div>
				</SwipeableViews>
			</MainContainer>
			<Spacer y={2} />
		</>
	);
}

export default Recommendation;
