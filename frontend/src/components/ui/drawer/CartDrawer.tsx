import { SheetContent, SheetHeader, SheetTitle } from "./sheet";
import Cart from "@/components/Cart";

export default function CartDrawer() {
    return (
        <SheetContent side="right">
            <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
                <Cart />
            </div>
        </SheetContent>
    )
}