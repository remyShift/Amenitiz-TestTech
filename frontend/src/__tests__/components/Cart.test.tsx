import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@/__tests__/utils/test-utils";
import Cart from "@/components/Cart";
import { useCart } from "@/hooks/useCart";

vi.mock('@/hooks/useCart');

describe('Cart', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the cart', () => {
        vi.mocked(useCart).mockReturnValue({
            items: [],
            total: 0,
            addItem: vi.fn(),
            removeItem: vi.fn(),
            computeOrderTotal: vi.fn()
        });

        render(<Cart />);
        expect(screen.getByTestId('cart')).toBeInTheDocument();
    });

    it('should display "Empty cart" when cart is empty', () => {
        vi.mocked(useCart).mockReturnValue({
            items: [],
            total: 0,
            addItem: vi.fn(),
            removeItem: vi.fn(),
            computeOrderTotal: vi.fn()
        });

        render(<Cart />);
        expect(screen.getByText('Empty cart')).toBeInTheDocument();
    });

    it('should display cart item name when cart has one item', () => {
        vi.mocked(useCart).mockReturnValue({
            items: [{ id: 1, code: 'CF1', name: 'Coffee', price: 11.23, quantity: 1 }],
            total: 0,
            addItem: vi.fn(),
            removeItem: vi.fn(),
            computeOrderTotal: vi.fn()
        });

        render(<Cart />);
        expect(screen.getByText('Coffee')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('11.23€')).toBeInTheDocument();
    });

    it('should display total price of the cart when cart has one item', () => {
        vi.mocked(useCart).mockReturnValue({
            items: [{ id: 1, code: 'CF1', name: 'Coffee', price: 11.23, quantity: 1 }],
            total: 11.23,
            addItem: vi.fn(),
            removeItem: vi.fn(),
            computeOrderTotal: vi.fn()
        });

        render(<Cart />);
        expect(screen.getByText('11.23€')).toBeInTheDocument();
    });

});