import { useQuery } from '@tanstack/react-query';
import type { CatalogItem } from '@/types/Catalog';
import type { CartTotalResponse } from '@/types/Cart';
import CartService from '@/services/CartService';
import { useCartContext } from '@/context/CartContext';

const defaultCartTotal: CartTotalResponse = {
	total: 0,
	original_total: 0,
	total_savings: 0,
	discounts_applied: [],
};

export const useCart = () => {
	const { items, setItems } = useCartContext();

	const { data: cartTotal = defaultCartTotal, refetch: refetchTotal } =
		useQuery({
			queryKey: ['cart-total', items],
			queryFn: () => {
				return CartService.calculateOrderTotal(items);
			},
			enabled: items.length > 0,
			staleTime: 0,
		});

	const addItem = async (item: CatalogItem) => {
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
			const newItems = prevItems.map((i) =>
				i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
			);
			const filteredItems = newItems.filter((i) => i.quantity > 0);
			localStorage.setItem('cart', JSON.stringify(filteredItems));
			return filteredItems;
		});

		refetchTotal();
	};

	const computeOrderTotal = async () => {
		await refetchTotal();
	};

	return {
		items,
		addItem,
		removeItem,
		total: cartTotal.total,
		originalTotal: cartTotal.original_total,
		totalSavings: cartTotal.total_savings,
		discountsApplied: cartTotal.discounts_applied,
		computeOrderTotal,
	};
};
