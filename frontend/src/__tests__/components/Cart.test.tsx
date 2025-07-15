import { describe, it, expect } from "vitest";
import { render, screen } from "@/__tests__/utils/test-utils";
import Cart from "@/components/Cart";

describe('Cart', () => {
    it('should render the cart', () => {
        render(<Cart />);

        expect(screen.getByTestId('cart')).toBeInTheDocument();
    });
});