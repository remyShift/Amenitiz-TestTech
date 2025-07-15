import { useState } from 'react';
import type { CatalogItem } from '@/types/Catalog';
import CartService from '@/services/CartService';

export const useCart = () => {
	const [items, setItems] = useState<CatalogItem[]>([]);
	const [total, setTotal] = useState<number>(0);

	const addItem = (item: CatalogItem) => {
		setItems((prevItems) => [...prevItems, item]);
	};

	const computeOrderTotal = async () => {
		const total = await CartService.calculateOrderTotal(items);
		setTotal(total);
	};

	return { items, addItem, total, computeOrderTotal };
};
