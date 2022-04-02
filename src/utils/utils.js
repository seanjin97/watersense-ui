const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
function firstN(obj, n) {
	return Object.keys(obj) // get the keys out
		.sort() // this will ensure consistent ordering of what you will get back. If you want something in non-aphabetical order, you will need to supply a custom sorting function
		.slice(0, n) // get the first N
		.reduce((memo, current) => {
			// generate a new object out of them
			memo[current] = obj[current];
			return memo;
		}, {});
}

function getPrevMonth() {
	const date = new Date().toLocaleString('en-US', { timeZone: 'Singapore' });
	const localDate = new Date(date);
	localDate.setDate(0);
	const month = months[localDate.getMonth()];
	const year = localDate.getFullYear();

	return { month, year };
}

export { firstN, getPrevMonth };
