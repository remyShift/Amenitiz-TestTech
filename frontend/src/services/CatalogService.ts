class CatalogService {
	private baseUrl = 'http://localhost:3000';

	async getCatalog() {
		return fetch(`${this.baseUrl}/catalog`).then((response) => {
			if (!response.ok) {
				throw new Error('Failed to fetch catalog');
			}

			return response.json();
		});
	}
}

export default new CatalogService();
