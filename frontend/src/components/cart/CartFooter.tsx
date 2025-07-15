import { useCart } from "@/hooks/useCart";
import { Button } from "../ui/buttons/button";
import DiscountInfo from "./DiscountInfo";

export default function CartFooter() {
    const { total } = useCart();
    
    return (
        <div data-testid="total-price" className="border-t-2 border-border pt-4 flex flex-col gap-4">
            <DiscountInfo />
            <div className="flex justify-between items-center text-2xl font-bold">
                <p>Total : </p>
                <p>{total.toFixed(2)}€</p>
            </div>
            
            <Button className="rounded-md" onClick={() => alert('Not implemented yet ...')}>Checkout</Button>
        </div>
    )
}
