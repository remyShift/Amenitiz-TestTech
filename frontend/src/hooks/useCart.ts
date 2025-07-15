import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { CatalogItem } from '@/types/Catalog';
import CartService from '@/services/CartService';

export const useCart = () => {
	const [items, setItems] = useState<CatalogItem[]>(() => {
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : [];
	});

	const { data: total = 0, refetch: refetchTotal } = useQuery({
		queryKey: ['cart-total'],
		queryFn: () => CartService.calculateOrderTotal(items),
		enabled: false,
		staleTime: Infinity,
	});

	const addItem = (item: CatalogItem) => {
		const newItems = [...items, item];
		setItems(newItems);
		localStorage.setItem('cart', JSON.stringify(newItems));
	};

	const computeOrderTotal = async () => {
		await refetchTotal();
	};

	return { items, addItem, total, computeOrderTotal };
};
