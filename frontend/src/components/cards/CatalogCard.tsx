import type { CatalogItem } from "@/types/Catalog";

export default function CatalogCard({ item }: { item: CatalogItem }) {
    return (
        <div data-testid="catalog-card">
            {/* <p className="text-lg font-bold text-blue-600">
                {item.code} | {item.name} | {item.price}
            </p> */}
        </div>
    )
}
