import { useCart } from "@/hooks/useCart"
import CartHeader from "./CartHeader"
import CartFooter from "./CartFooter";
import CartContent from "./CartContent";

export default function Cart() {
    const { items } = useCart();

    if (items.length === 0 || !items) {
        return <p className="text-lg" data-testid="empty-cart">Empty cart, add some items to your cart ...</p>
    }

    return (
        <div data-testid="cart" className="h-full flex flex-col justify-between pb-12 overflow-y-auto">
            <div className="flex flex-col gap-4">
                <CartHeader />
                <CartContent /> 
            </div>
            <CartFooter />
        </div>
    )
}
