import { useCart } from "@/hooks/useCart";

export default function CartFooter() {
    const { total } = useCart();
    
    return (
        <div data-testid="total-price" className="flex justify-between items-center text-2xl font-bold border-t-2 border-border pt-4">
            <p>Total : </p> 
            <p>{total}€</p>
        </div>
    )
}
