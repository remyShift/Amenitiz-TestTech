import { SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./sheet";
import Cart from "@/components/cart/Cart";

export default function CartDrawer() {
    return (
        <SheetContent side="right" className="flex-1 px-4">
            <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription>
                    Manage your items and finalize your order.
                </SheetDescription>
            </SheetHeader>

            <Cart />
        </SheetContent>
    )
}