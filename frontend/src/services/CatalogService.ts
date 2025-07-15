import type { Catalog } from '@/types/Catalog';

class CatalogService {
	private baseUrl = process.env.BASE_API_URL;

	async getCatalog(): Promise<Catalog> {
		return fetch(`${this.baseUrl}/catalog`).then((response) => {
			if (!response.ok) {
				throw new Error('Failed to fetch catalog');
			}

			return response.json();
		});
	}
}

export default new CatalogService();
