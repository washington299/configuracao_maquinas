export const createSlugBasedOnString = value => {
	const slug = value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/  +/g, ' ');
	return slug;
};

export const formatSlugToString = value => {
	const slug = value.normalize('NFD').replaceAll('-', ' ');
	return slug;
};
