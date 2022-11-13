import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const globalRender = (children) => render(
	<QueryClientProvider client={queryClient}>
		{children}
	</QueryClientProvider>
);
