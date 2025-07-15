import { useCart } from "@/hooks/useCart"

export default function Cart() {
    const { items, removeItem, total } = useCart();

    return (
        <div data-testid="cart">
            {items.length === 0 && <p>Empty cart</p>}
            {items.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.price}€</p>
                    <p>{item.quantity}</p>
                    <button data-testid="remove-button" onClick={() => removeItem(item)}>Remove</button>
                </div>
            ))}
            <p data-testid="total-price">{total}€</p>
        </div>
    )
}
