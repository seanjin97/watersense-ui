import { Card, Image, Loading, Spacer, Text } from '@nextui-org/react';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FullScreenLoading from '../components/Common/FullScreenLoading';
import colors from '../styles/colors';
import { getPrevMonth } from '../utils/utils';

const MainContainer = styled.div`
	margin: 2em 1em 1em 1em;
`;

const HeaderContainer = styled.div`
	float: left;
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TopThreeContainer = styled(FlexContainer)`
	justify-content: space-around;
	align-items: center;
`;

const SecondPlaceImage = styled.img`
	border: 3px solid ${colors.blue.darker};
`;

const FirstPlaceImage = styled.img`
	border: 3px solid ${colors.blue.darker};
`;

const ThirdPlaceImage = styled.img`
	border: 3px solid ${colors.blue.darker};
`;

const ImageContainer = styled.div``;

function Leaderboard() {
	const navigate = useNavigate();
	const [images, setImages] = useState(null);
	const [leaderboard, setLeaderboard] = useState(null);

	const getLeaderboard = async () => {
		const res = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/leaderboard/test1`
		);
		if (res.status === 200) {
			setLeaderboard(await res.json());
		}
	};

	const getUserImages = async () => {
		const res = await fetch(`https://randomuser.me/api/?results=4&seed=1`);
		if (res.status === 200) {
			setImages(await res.json());
		}
	};

	useEffect(() => {
		getLeaderboard();
	}, []);

	useEffect(() => {
		getUserImages();
	}, []);

	console.log(leaderboard);

	if (!images || !leaderboard) {
		return <FullScreenLoading />;
	}
	return (
		<MainContainer>
			<HeaderContainer>
				<i className='fa-solid fa-chevron-left' onClick={() => navigate(-1)} />
			</HeaderContainer>

			<Text weight='bold' h4 css={{ textAlign: 'center' }}>
				Leaderboard
			</Text>
			<Spacer y={3} />
			<FlexContainer>
				<Text h3>
					{getPrevMonth().month} {getPrevMonth().year} Standings
				</Text>
			</FlexContainer>
			<Spacer y={3} />
			<TopThreeContainer>
				<ImageContainer>
					<FlexContainer>
						<Text>2nd</Text>{' '}
						<i className='fa-solid fa-crown' style={{ color: 'silver' }} />
					</FlexContainer>

					<SecondPlaceImage
						width={80}
						src={images.results[1].picture.large}
						alt='2nd place'
						className='rounded-circle'
					/>
					<FlexContainer>
						<Text weight='bold'>{leaderboard.leaderboard[1].username}</Text>{' '}
					</FlexContainer>
				</ImageContainer>
				<ImageContainer>
					<FlexContainer>
						<Text>1st</Text>{' '}
						<i className='fa-solid fa-crown' style={{ color: 'gold' }} />
					</FlexContainer>
					<FirstPlaceImage
						width={120}
						src={images.results[0].picture.large}
						alt='1st place'
						className='rounded-circle'
					/>
					<FlexContainer>
						<Text weight='bold'>{leaderboard.leaderboard[0].username}</Text>{' '}
					</FlexContainer>
				</ImageContainer>
				<ImageContainer>
					<FlexContainer>
						<Text>3rd</Text>{' '}
						<i className='fa-solid fa-crown' style={{ color: 'brown' }} />
					</FlexContainer>
					<ThirdPlaceImage
						width={80}
						src={images.results[2].picture.large}
						alt='3rd place'
						className='rounded-circle'
					/>
					<FlexContainer>
						<Text weight='bold'>{leaderboard.leaderboard[2].username}</Text>{' '}
					</FlexContainer>
				</ImageContainer>
			</TopThreeContainer>
			<Spacer y={1} />
			<Text h4 color={colors.blue.darkerer}>
				The Rankings
			</Text>
			<div>
				{leaderboard.leaderboard.map((standing, index) => (
					<Card
						key={standing.username}
						css={{ marginTop: '0.5em' }}
						bordered
						borderWeight='light'
					>
						<div className='d-flex align-items-center'>
							<div>
								<Text weight='bold'>{index + 1}</Text>
							</div>
							<ImageContainer className='mx-3'>
								<img
									width={50}
									src={images.results[index].picture.large}
									alt='2nd place'
									className='rounded-circle'
								/>
							</ImageContainer>
							<div>
								<Text h4>{standing.username}</Text>
								<Text>
									{Math.round(
										(leaderboard.leaderboard[index].total_usage / 1000 +
											Number.EPSILON) *
											100
									) / 100}
									L
								</Text>
							</div>
						</div>
					</Card>
				))}
			</div>
			<Spacer y={1} />
			<Text h4 color={colors.blue.darkerer}>
				Your position
			</Text>
			<div>
				<Card
					bordered
					borderWeight='light'
					css={{ background: colors.greyBlue }}
				>
					<div className='d-flex align-items-center'>
						<div>
							<Text weight='bold'>{leaderboard.standing.position}</Text>
						</div>
						<ImageContainer className='mx-3'>
							<img
								width={50}
								src={
									_.findIndex(leaderboard.leaderboard, {
										username: leaderboard.standing.usage.username,
									}) >= 0
										? images.results[
												_.findIndex(leaderboard.leaderboard, {
													username: leaderboard.standing.usage.username,
												})
										  ].picture.large
										: images.results[3].picture.large
								}
								alt='2nd place'
								className='rounded-circle'
							/>
						</ImageContainer>
						<div>
							<Text h4>You</Text>
							<Text>
								{Math.round(
									(leaderboard.standing.usage.total_usage / 1000 +
										Number.EPSILON) *
										100
								) / 100}
								L
							</Text>
						</div>
					</div>
				</Card>
			</div>
			<Spacer y={4} />
		</MainContainer>
	);
}

export default Leaderboard;
