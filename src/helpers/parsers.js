export const createSlugBasedOnString = value => {
	const slug = value.replace(/ +/g, '-');
	return slug;
};

export const formatSlugToString = value => {
	const slug = value.replace(/-/g, ' ');
	return slug;
};
