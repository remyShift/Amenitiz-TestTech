import { useCart } from "@/hooks/useCart";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe('useCart', () => {
    it('should add an item to the cart when the addItem function is called', () => {
        const itemToAdd = { id: 1, code: '123', name: 'Coffee', price: 10 };
        const { result } = renderHook(() => useCart());

        act(() => {
            result.current.addItem(itemToAdd);
        });

        expect(result.current.items).toEqual([itemToAdd]);
    });
});