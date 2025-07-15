import type { CatalogItem } from "@/types/Catalog";
import { useCart } from "@/hooks/useCart";

export default function ItemCard({ item }: { item: CatalogItem }) {
    const { addItem } = useCart();

    return (
        <div data-testid="catalog-card">
            <p className="text-lg font-bold text-blue-600">
                {item.code}
            </p>
            <p className="text-lg font-bold text-blue-600">
                {item.name}
            </p>
            <p className="text-lg font-bold text-blue-600">
                {item.price}€
            </p>
            <button data-testid="add-button" onClick={() => addItem(item)}>Add to cart</button>
        </div>
    )
}
