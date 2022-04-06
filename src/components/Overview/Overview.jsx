import React from 'react';
import { Text } from '@nextui-org/react';
import styled from 'styled-components';
import icon from './waterheart.png';
import colors from '../../styles/colors';
import { getPrevMonth } from '../../utils/utils';

const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const CardContainer = styled.div`
	border-radius: 24px;
	background: ${colors.grey};
	padding: 1em;
	margin: 1em;
`;

const ContentContainer = styled(FlexContainer)`
	justify-content: space-between;
	align-items: center;
`;
function MonthlyOverview({ data }) {
	return (
		<>
			<FlexContainer>
				<Text h3>
					{getPrevMonth().month} {getPrevMonth().year} Overview
				</Text>
			</FlexContainer>

			<FlexContainer>
				<CardContainer>
					<ContentContainer>
						<img
							className='watericon'
							alt='waterheart'
							src={icon}
							width={50}
							height='auto'
						/>
						<div className='mx-3'>
							<Text size={11} weight='bold'>
								Total Water Consumption For {getPrevMonth().month}{' '}
								{getPrevMonth().year}
							</Text>
							{data.prev_month_usage > data.prev_month_goal && (
								<Text
									size={12}
									weight='bold'
									css={{
										background: colors.primaryRed,
										display: 'inline',
										color: colors.offWhite,
									}}
								>
									Monthly Limit Exceeded
								</Text>
							)}
							<Text size={12} weight='bold'>{`${
								Math.round(
									(data.prev_month_usage / 1000 + Number.EPSILON) * 100
								) / 100
							} Litres / ${data.prev_month_goal / 1000} Litres`}</Text>
						</div>
					</ContentContainer>
				</CardContainer>
			</FlexContainer>
			<FlexContainer>
				<CardContainer>
					<ContentContainer>
						<img
							className='watericon'
							alt='waterheart'
							src={icon}
							width={50}
							height='auto'
						/>
						<div className='mx-3'>
							<Text size={11} weight='bold'>
								Daily Water Usage Trends For {getPrevMonth().month}{' '}
								{getPrevMonth().year}
							</Text>
							<Text size={11} weight='bold' transform='capitalize'>
								Number of days exceeding daily limit
							</Text>
							<Text
								size={12}
								weight='bold'
								css={{
									background: data.num_days_exceeded > 0 && colors.primaryRed,
									display: 'inline',
									color: data.num_days_exceeded > 0 && colors.offWhite,
								}}
							>
								{data.num_days_exceeded} / {data.num_days_in_prev_month} Days
							</Text>
						</div>
					</ContentContainer>
				</CardContainer>
			</FlexContainer>
		</>
	);
}

export default MonthlyOverview;
