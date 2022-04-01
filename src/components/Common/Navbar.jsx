import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const useStyles = makeStyles({
	//   root: {
	//     width: 500,
	//   },
});

const styles = {
	stickToBottom: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
	},
};

const StickyBottomNav = styled(BottomNavigation)`
	position: fixed;
	bottom: 0;
	width: 100%;
`;

export default function Navbar() {
	const classes = useStyles();
	const [value, setValue] = React.useState(1);
	return (
		<div className='justify-center'>
			<StickyBottomNav
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
				className={classes.root}
			>
				<BottomNavigationAction
					label='Leaderboard'
					icon={<SignalCellularAltIcon />}
					component={Link}
					to='/leaderboard'
				/>

				<BottomNavigationAction
					label='Home'
					icon={<HomeIcon />}
					component={Link}
					to='/'
				/>

				<BottomNavigationAction
					label='Overview'
					icon={<CalendarTodayIcon />}
					component={Link}
					to='/overview'
				/>
			</StickyBottomNav>
		</div>
	);
}
