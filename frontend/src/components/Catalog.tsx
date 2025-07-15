import { useCatalog } from "@/hooks/useCatalog";
import type { CatalogItem } from "@/types/Catalog";
import ItemCard from "@/components/cards/ItemCard";

export default function Catalog() {
    const { isLoading, error, data: catalog } = useCatalog();

    if (isLoading) {
        return <div data-testid="loader">Loading...</div>;
    }

    if (error) {
        return <div data-testid="error-message">
            <p>Error: {error.message}</p>
            <p>Please try again later.</p>
        </div>;
    }

    return (
        <div data-testid="catalog" className="flex flex-col gap-4">
            {catalog!.map((item: CatalogItem) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}