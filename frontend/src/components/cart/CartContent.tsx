import { Button } from '../ui/buttons/button'
import { useCart } from '@/hooks/useCart'

export default function CartContent() {
    const { items, removeItem } = useCart();

    if (items.length === 0 || !items) {
        return null;
    }

    return (
        <>
            {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b-2 border-border pb-4">
                    <h1>{item.name}</h1>
                    <p>{item.price}€</p>
                    <p>{item.quantity}</p>
                    <Button data-testid="remove-button"
                        onClick={() => removeItem(item)}
                        className="bg-red-500 rounded-md font-bold text-2xl"
                        size="icon"
                    >
                        -
                    </Button>
                </div>
            ))}
        </>
    )
}
