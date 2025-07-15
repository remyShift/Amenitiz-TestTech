import type { CartItem } from '@/types/Cart';

class CartService {
	private baseUrl = 'http://localhost:3000';

	async calculateOrderTotal(items: CartItem[]): Promise<number> {
		const itemsToSend = items.map((item) => ({
			code: item.code,
			quantity: item.quantity,
		}));

		const response = await fetch(`${this.baseUrl}/cart/total`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(itemsToSend),
		});

		return response.json().then((data) => data.total);
	}
}

export default new CartService();
