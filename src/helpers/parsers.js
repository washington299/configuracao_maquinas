export const createSlugBasedOnString = (value) => {
	const slug = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll(' ', '-');
	return slug;
};
