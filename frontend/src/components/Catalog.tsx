import { useCatalog } from "@/hooks/useCatalog";
import type { CatalogItem } from "@/types/Catalog";

export default function Catalog() {
    const { isLoading, error, data: catalog } = useCatalog();

    if (isLoading) {
        return <div data-testid="loading">Loading...</div>;
    }

    if (error) {
        return <div data-testid="error">Error: {error.message}</div>;
    }

    return (
        <div data-testid="catalog">
            {catalog!.map((item: CatalogItem) => (
                <div data-testid="catalog-item" key={item.id}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}