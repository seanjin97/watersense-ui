// /* eslint-disable no-case-declarations */
import React, { useReducer, useContext, createContext } from 'react';
import store from './store';
// Create context
export const GlobalContext = createContext(store);

// Reducer
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				counter: state.counter + 1,
			};
		case 'decrement':
			return {
				...state,
				counter: state.counter - 1,
			};
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};
// Provider component
export function GlobalProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, store);
	const value = { state, dispatch };
	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
}

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);
	if (context === undefined) {
		throw new Error('useShoppingItems must be used within a GlobalProvider');
	}
	return context;
};
