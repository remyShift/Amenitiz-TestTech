import type { CatalogItem } from '@/types/Catalog';

class CartService {
	private baseUrl = 'http://localhost:3000';

	async calculateOrderTotal(items: CatalogItem[]): Promise<number> {
		const response = await fetch(`${this.baseUrl}/cart/total`, {
			method: 'POST',
			body: JSON.stringify(items),
		});

		return response.json();
	}
}

export default new CartService();
