import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { CatalogItem } from '@/types/Catalog';
import CartService from '@/services/CartService';

type CartItem = CatalogItem & { quantity: number };

export const useCart = () => {
	const [items, setItems] = useState<CartItem[]>(() => {
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
		setItems((prevItems) => {
			const existingItem = prevItems.find((i) => i.id === item.id);

			if (existingItem) {
				const updatedItems = prevItems.map((i) =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				);
				localStorage.setItem('cart', JSON.stringify(updatedItems));
				return updatedItems;
			} else {
				const newItems = [...prevItems, { ...item, quantity: 1 }];
				localStorage.setItem('cart', JSON.stringify(newItems));
				return newItems;
			}
		});

		refetchTotal();
	};

	const removeItem = (item: CatalogItem) => {
		setItems((prevItems) => {
			const newItems = prevItems.filter((i) => i.id !== item.id);
			localStorage.setItem('cart', JSON.stringify(newItems));
			return newItems;
		});

		refetchTotal();
	};

	const computeOrderTotal = async () => {
		await refetchTotal();
	};

	return { items, addItem, removeItem, total, computeOrderTotal };
};
