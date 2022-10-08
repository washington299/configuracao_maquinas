import { createSlugBasedOnString, formatSlugToString } from '.';

describe('createSlugBasedOnString', () => {
	it('Should return a slug when a string is passed', () => {
		const response = createSlugBasedOnString('Hello world');

		expect(response).toBe('hello-world');
	});
});

describe('formatSlugToString', () => {
	it('Should return a format a slug to string', () => {
		const response = formatSlugToString('hello-world');

		expect(response).toBe('hello world');
	});
});
