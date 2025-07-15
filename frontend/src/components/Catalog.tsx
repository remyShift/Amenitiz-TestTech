import { useEffect } from "react";
import { useCatalog } from "@/hooks/useCatalog";

export default function Catalog() {
    const { fetchCatalog, loading } = useCatalog();

    useEffect(() => {
        fetchCatalog();
    }, []);

	return (
        <div data-testid="catalog">
            {loading && <div data-testid="loading">Loading...</div>}
        </div>
    );
}