export const initialsCreator = (data) => {
	const words = data.split(' ');
	const firstLetters = words.map((item) => item.charAt(0));
	return firstLetters.join('').toUpperCase();
};

export const getRandomItem = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};
