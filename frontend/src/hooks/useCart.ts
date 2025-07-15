import { useState } from 'react';
import type { CatalogItem } from '@/types/Catalog';

export const useCart = () => {
	const [items, setItems] = useState<CatalogItem[]>([]);

	const addItem = (item: CatalogItem) => {
		setItems((prevItems) => [...prevItems, item]);
	};

	return { items, addItem };
};
