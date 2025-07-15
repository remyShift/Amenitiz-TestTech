import { useQuery } from '@tanstack/react-query';
import CatalogService from '@/services/CatalogService';

export const useCatalog = () => {
	return useQuery({
		queryKey: ['catalog'],
		queryFn: () => CatalogService.getCatalog(),
		staleTime: 5 * 60 * 1000,
		gcTime: 10 * 60 * 1000,
	});
};
