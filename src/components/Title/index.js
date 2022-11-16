import { Heading } from '@chakra-ui/react';

export const Title = ({ text }) => {
	return (
		<Heading as="h1" textAlign="center" fontSize={{ base: "xl", lg: "3xl"}} mb={6}>
			{text}
		</Heading>
	);
};
