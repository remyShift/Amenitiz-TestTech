import { useQuery } from '@tanstack/react-query';
import type { CatalogItem } from '@/types/Catalog';
import CartService from '@/services/CartService';
import { useCartContext } from '@/context/CartContext';

export const useCart = () => {
	const { items, setItems } = useCartContext();

	console.log('🛒 useCart - Items:', items);
	console.log('🛒 useCart - Items length:', items.length);

	const { data: total = 0, refetch: refetchTotal } = useQuery({
		queryKey: ['cart-total', items],
		queryFn: () => {
			console.log('🔢 Calculating total for items:', items);
			return CartService.calculateOrderTotal(items);
		},
		enabled: items.length > 0,
		staleTime: 0,
	});

	console.log('💰 useCart - Total:', total);

	const addItem = async (item: CatalogItem) => {
		console.log('➕ useCart - Adding item:', item);
		setItems((prevItems) => {
			console.log('➕ useCart - Previous items:', prevItems);
			const existingItem = prevItems.find((i) => i.id === item.id);

			if (existingItem) {
				console.log('➕ useCart - Item exists, updating quantity');
				const updatedItems = prevItems.map((i) =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				);
				console.log('➕ useCart - Updated items:', updatedItems);
				localStorage.setItem('cart', JSON.stringify(updatedItems));
				return updatedItems;
			} else {
				console.log('➕ useCart - New item, adding to cart');
				const newItems = [...prevItems, { ...item, quantity: 1 }];
				console.log('➕ useCart - New items:', newItems);
				localStorage.setItem('cart', JSON.stringify(newItems));
				return newItems;
			}
		});
		refetchTotal();
	};

	const removeItem = (item: CatalogItem) => {
		console.log('➖ useCart - Removing item:', item);
		setItems((prevItems) => {
			console.log('➖ useCart - Previous items:', prevItems);
			const newItems = prevItems.map((i) =>
				i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
			);
			console.log(
				'➖ useCart - Items after quantity reduction:',
				newItems
			);
			const filteredItems = newItems.filter((i) => i.quantity > 0);
			console.log('➖ useCart - Filtered items:', filteredItems);
			localStorage.setItem('cart', JSON.stringify(filteredItems));
			return filteredItems;
		});

		refetchTotal();
	};

	const computeOrderTotal = async () => {
		await refetchTotal();
	};

	return { items, addItem, removeItem, total, computeOrderTotal };
};
