import { useCart } from "@/hooks/useCart"

export default function Cart() {
    const { items } = useCart();

    if (items.length === 0) {
        return <div data-testid="cart">Empty cart</div>
    }

    return (
        <div data-testid="cart">
            <h1>Cart</h1>
        </div>
    )
}
