import type { CartItem } from '@/types/Cart';

class CartService {
	private baseUrl = 'http://localhost:3000';

	async calculateOrderTotal(items: CartItem[]): Promise<number> {
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
			.then((data) => data.total)
			.catch((error) => {
				console.error('Error calculating total:', error);
				throw error;
			});
	}
}

export default new CartService();
