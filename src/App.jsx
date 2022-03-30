import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Navbar from './components/Common/Navbar';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/leaderboard' element={<Leaderboard />} />
				</Routes>
				<Navbar />
			</div>
		</BrowserRouter>
	);
}

export default App;
