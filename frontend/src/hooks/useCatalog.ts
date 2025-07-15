import { useState } from 'react';
import CatalogService from '@/services/CatalogService';

export const useCatalog = () => {
	const [loading, setLoading] = useState(true);

	const fetchCatalog = async () => {
		await CatalogService.getCatalog();
		setLoading(false);
	};

	return {
		loading,
		fetchCatalog,
	};
};
