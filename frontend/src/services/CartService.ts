import type { CatalogItem } from '@/types/Catalog';

class CartService {
	private baseUrl = 'http://localhost:3000';

	async calculateOrderTotal(items: CatalogItem[]): Promise<number> {
		const aggregatedCodes = items.map((item) => item.code).join(',');

		if (aggregatedCodes.length === 0) {
			return 0;
		}

		const response = await fetch(`${this.baseUrl}/cart/total`, {
			method: 'POST',
			body: JSON.stringify(aggregatedCodes),
		});

		return response.json();
	}
}

export default new CartService();
