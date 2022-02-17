import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import { GlobalProvider } from './store/reducer';

ReactDOM.render(
	<React.StrictMode>
		<GlobalProvider>
			<NextUIProvider>
				<App />
			</NextUIProvider>
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
