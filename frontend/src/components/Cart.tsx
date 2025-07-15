import { useCart } from "@/hooks/useCart"
import { Button } from "./ui/buttons/button"

export default function Cart() {
    const { items, removeItem, total } = useCart();

    return (
        <div data-testid="cart" className="h-full flex flex-col justify-between pb-12">
            {items.length === 0 && <p className="text-xl">Empty cart, add some items to your cart ...</p>}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b-2 border-border pb-4">
                    <p>Item</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Remove</p>
                </div>
                {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                        <h1>{item.name}</h1>
                        <p>{item.price}€</p>
                        <p>{item.quantity}</p>
                        <Button data-testid="remove-button" onClick={() => removeItem(item)} className="bg-red-500 rounded-md">Remove</Button>
                    </div>
                ))}
            </div>
            <div data-testid="total-price" className="flex justify-between items-center text-2xl font-bold border-t-2 border-border pt-4">
                <p>Total : </p> 
                <p>{total}€</p>
            </div>
        </div>
    )
}
