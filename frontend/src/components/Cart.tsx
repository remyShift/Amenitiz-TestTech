import { useCart } from "@/hooks/useCart"

export default function Cart() {
    const { items } = useCart();

    return (
        <div data-testid="cart">
            {items.length === 0 ? 'Empty cart' : 'Cart'}
        </div>
    )
}
