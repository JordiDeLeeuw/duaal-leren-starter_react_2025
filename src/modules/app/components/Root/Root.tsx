import { App } from '~/app';
import '../../../../i18n/i18n.config'; // 👈 This makes sure i18n is set up BEFORE React renders

import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60, // 1 hour
			gcTime: 1000 * 60 * 60, // 1 hour 
			refetchInterval: 1000 * 60 * 60, // Refetch every minute
		},
	},
});

export const Root = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);
};


