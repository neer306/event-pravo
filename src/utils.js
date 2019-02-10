export const range = (number) => {
	const array = [];

	for (let i = 1; i <= number; i++) {
		array.push(i);
	}
	return array;
};

export const debounce = (func, timeout) => {
	let timer = null;

	return function (...args) {
		const onComplete = () => {
			func.apply(this, args);
			timer = null;
		};

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(onComplete, timeout);
	};
};