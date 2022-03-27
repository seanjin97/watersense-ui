import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Leaderboard from './pages/Leaderboard';
import Navbar from './components/Common/Navbar';
import Goals from './pages/Goals';
import Overview from './pages/Overview'

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/home' element={<Home />} />
					<Route path='/leaderboard' element={<Leaderboard />} />
					<Route path='/goals' element={<Goals />} />
					<Route path='/overview' element={<Overview />} />
				</Routes>
				<Navbar />
			</div>
		</BrowserRouter>
	);
}

export default App;
