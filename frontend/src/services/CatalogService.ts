import type { Catalog } from '@/types/Catalog';

class CatalogService {
	private baseUrl = 'http://localhost:3000';

	async getCatalog(): Promise<Catalog> {
		return fetch(`${this.baseUrl}/catalog`).then((response) => {
			if (!response.ok) {
				throw new Error('Failed to fetch catalog');
			}

			return response.json() as Promise<Catalog>;
		});
	}
}

export default new CatalogService();
