import { useState } from 'react';
import type { CatalogItem } from '@/types/Catalog';

export const useCart = () => {
	const [items, setItems] = useState<CatalogItem[]>([]);

	const addItem = (item: CatalogItem) => {
		setItems([...items, item]);
	};

	return { items, addItem };
};
