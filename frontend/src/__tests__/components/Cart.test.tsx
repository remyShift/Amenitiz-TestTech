import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@/__tests__/utils/test-utils";
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
        expect(screen.getByTestId('total-price')).toBeInTheDocument();
        expect(screen.getByTestId('total-price').textContent).toBe('11.23€');
    });

    it('should display a remove button for each item in the cart', () => {
        vi.mocked(useCart).mockReturnValue({
            items: [{ id: 1, code: 'GR1', name: 'Green Tea', price: 3.11, quantity: 2 }],
            total: 3.11,
            addItem: vi.fn(),
            removeItem: vi.fn(),
            computeOrderTotal: vi.fn()
        });

        render(<Cart />);
        expect(screen.getAllByTestId('remove-button').length).toBe(1);
    });

    it('should call the removeItem function when the remove button is clicked', () => {
        const removeItem = vi.fn();
        const mockUseCart = vi.mocked(useCart);
        
        mockUseCart.mockReturnValue({
            items: [{ id: 1, code: 'GR1', name: 'Green Tea', price: 3.11, quantity: 2 }, { id: 2, code: 'SR1', name: 'Strawberries', price: 5, quantity: 3 }],
            total: 3.11,
            addItem: vi.fn(),
            removeItem: removeItem,
            computeOrderTotal: vi.fn()
        });

        const { rerender } = render(<Cart />);
        
        fireEvent.click(screen.getAllByTestId('remove-button')[0]);
        
        expect(removeItem).toHaveBeenCalledWith({ id: 1, code: 'GR1', name: 'Green Tea', price: 3.11, quantity: 2 });
        expect(removeItem).toHaveBeenCalledTimes(1);

        mockUseCart.mockReturnValue({
            items: [{ id: 1, code: 'GR1', name: 'Green Tea', price: 3.11, quantity: 1 }, { id: 2, code: 'SR1', name: 'Strawberries', price: 5, quantity: 3 }],
            total: 3.11,
            addItem: vi.fn(),
            removeItem: removeItem,
            computeOrderTotal: vi.fn()
        });

        rerender(<Cart />);
        expect(screen.getByText('1')).toBeInTheDocument();
    });
});