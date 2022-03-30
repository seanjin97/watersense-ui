import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	//   root: {
	//     width: 500,
	//   },
});

export default function Navbar() {
	const classes = useStyles();
	const [value, setValue] = React.useState(1);

	return (
		<div className='justify-center'>
			<BottomNavigation
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
					to={'/leaderboard'}
				/>

				<BottomNavigationAction
					label='Home'
					icon={<HomeIcon />}
					component={Link}
					to={'/home'}
				/>

				<BottomNavigationAction
					label='Goals'
					icon={<PersonIcon />}
					component={Link}
					to={'/goals'}
				/>
			</BottomNavigation>
		</div>
	);
}
