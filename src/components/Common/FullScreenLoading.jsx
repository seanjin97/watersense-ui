import { Container, Loading } from '@nextui-org/react';
import React from 'react';

function FullScreenLoading() {
	return (
		<Container
			display='flex'
			justify='center'
			alignContent='center'
			alignItems='center'
			css={{
				width: '100vw',
				height: '100vh',
			}}
		>
			<Loading size='xl' />
		</Container>
	);
}

export default FullScreenLoading;
