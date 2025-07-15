import { useCart } from "@/hooks/useCart";
import { act, renderHook, waitFor } from "@/__tests__/utils/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { CatalogItem } from "@/types/Catalog";

vi.mock('@/services/CartService', () => ({
    default: {
        calculateOrderTotal: vi.fn().mockResolvedValue(10),
    },
}));

describe('useCart', () => {
    let itemToAdd: CatalogItem;

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        itemToAdd = { id: 1, code: '123', name: 'Coffee', price: 10 };
    });

    it('should add an item to the cart when the addItem function is called', () => {
        const { result } = renderHook(() => useCart());

        act(() => {
            result.current.addItem(itemToAdd);
        });

        expect(result.current.items).toEqual([itemToAdd]);
    });

    it('should add multiple items to the cart when the addItem function is called multiple times', () => {
        const { result } = renderHook(() => useCart());

        act(() => {
            result.current.addItem(itemToAdd);
        });

        act(() => {
            result.current.addItem(itemToAdd);
        });

        act(() => {
            result.current.addItem(itemToAdd);
        });

        expect(result.current.items).toEqual([itemToAdd, itemToAdd, itemToAdd]);
    });

    it('should calculate the total price of the cart with the computeOrderTotal function', async () => {
        const { result } = renderHook(() => useCart());

        act(() => {
            result.current.addItem(itemToAdd);
        });

        expect(result.current.items).toEqual([itemToAdd]);

        await act(async () => {
            await result.current.computeOrderTotal();
        });

        await waitFor(() => {
            expect(result.current.total).toEqual(10);
        });
    });
});