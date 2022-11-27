export const createSlugBasedOnString = value => {
	const slug = value.toLowerCase().replace(/ +/g, '-');

	return slug;
};

export const formatSlugToString = value => {
	if (!value) return "";

	const slug = value.replace(/-/g, ' ');

	return slug;
};
