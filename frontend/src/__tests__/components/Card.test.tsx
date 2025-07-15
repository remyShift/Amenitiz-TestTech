import ItemCard from "@/components/cards/ItemCard";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe('CatalogCard', () => {
    it('should display the card with the item data when the item is provided', () => {
        const item = { id: 1, code: '123', name: 'Coffee', price: 10 };

        render(<ItemCard item={item} />);

        expect(screen.getByTestId('catalog-card')).toBeInTheDocument();
        expect(screen.getByText(item.code)).toBeInTheDocument();
        expect(screen.getByText(item.name)).toBeInTheDocument();
        expect(screen.getByText(`${item.price}€`)).toBeInTheDocument();
    });

    it('should have a button to add the item to the cart', () => {
        const item = { id: 1, code: '123', name: 'Coffee', price: 10 };

        render(<ItemCard item={item} />);

        expect(screen.getByTestId('add-button')).toBeInTheDocument();
    });
});