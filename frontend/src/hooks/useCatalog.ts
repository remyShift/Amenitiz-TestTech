import { useState } from 'react';
import CatalogService from '@/services/CatalogService';

export const useCatalog = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchCatalog = async () => {
		CatalogService.getCatalog()
			.then(() => {
				setLoading(false);
			})
			.catch((error) => {
				setError(
					`An error occurred while fetching the catalog : ${error.message}`
				);
			});
	};

	return {
		loading,
		error,
		fetchCatalog,
	};
};
