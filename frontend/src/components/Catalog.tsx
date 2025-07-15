import { useCatalog } from "@/hooks/useCatalog";

export default function Catalog() {
    const { isLoading } = useCatalog();

    if (isLoading) {
        return <div data-testid="loading">Loading...</div>;
    }

    return (
        <div data-testid="catalog">
            Catalog
        </div>
    );
}