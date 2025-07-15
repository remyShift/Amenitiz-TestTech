import type { CartItem, CartTotalResponse } from '@/types/Cart';

class CartService {
	private baseUrl = process.env.BASE_API_URL;

	async calculateOrderTotal(items: CartItem[]): Promise<CartTotalResponse> {
		const itemsToSend = items.map((item) => ({
			code: item.code,
			quantity: item.quantity,
		}));

		return fetch(`${this.baseUrl}/cart/total`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ items: itemsToSend }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => data)
			.catch((error) => {
				console.error('Error calculating total:', error);
				throw error;
			});
	}
}

export default new CartService();
