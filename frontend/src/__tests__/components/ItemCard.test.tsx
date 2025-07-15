import ItemCard from "@/components/cards/ItemCard";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "@/__tests__/utils/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useCart } from "@/hooks/useCart";

vi.mock('@/hooks/useCart', () => ({
    useCart: vi.fn(),
}));

describe('CatalogCard', () => {
    const mockAddItem = vi.fn();
    
    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(useCart).mockReturnValue({
            addItem: mockAddItem,
            removeItem: vi.fn(),
            items: [],
            total: 0,
            computeOrderTotal: vi.fn(),
        });
    });

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

    it('should call the addItem function when the button is clicked', () => {
        const item = { id: 1, code: '123', name: 'Coffee', price: 10 };

        render(<ItemCard item={item} />);

        fireEvent.click(screen.getByTestId('add-button'));

        expect(mockAddItem).toHaveBeenCalledWith(item);
    });
});