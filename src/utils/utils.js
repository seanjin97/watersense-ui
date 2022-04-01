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

export { firstN };
