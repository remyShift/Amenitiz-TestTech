import { useCatalog } from "@/hooks/useCatalog";

export default function Catalog() {
    const { isLoading, error } = useCatalog();

    if (isLoading) {
        return <div data-testid="loading">Loading...</div>;
    }

    if (error) {
        return <div data-testid="error">Error: {error.message}</div>;
    }

    return (
        <div data-testid="catalog">
            Catalog
        </div>
    );
}