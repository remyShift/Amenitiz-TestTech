import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@/__tests__/utils/test-utils";
import Cart from "@/components/Cart";

describe('Cart', () => {
    it('should render the cart', () => {
        render(<Cart />);

        expect(screen.getByTestId('cart')).toBeInTheDocument();
    });

    it('should display "Panier vide" when cart is empty', () => {
        vi.mock('@/hooks/useCart', () => ({
            useCart: () => ({ items: [], total: 0 })
        }));

        render(<Cart />);
        expect(screen.getByText('Empty cart')).toBeInTheDocument();
    });
});