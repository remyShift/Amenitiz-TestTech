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
        <div data-testid="catalog" className="flex flex-col gap-4">
            {catalog!.map((item: CatalogItem) => (
                <div data-testid="catalog-item" key={item.id}>
                    <p className="text-lg font-bold text-blue-600">
                        {item.code} | {item.name} | {item.price}
                    </p>
                </div>
            ))}
        </div>
    );
}