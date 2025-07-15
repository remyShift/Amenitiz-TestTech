import { SheetContent, SheetHeader, SheetTitle } from "./sheet";
import Cart from "@/components/Cart";

export default function CartDrawer() {
    return (
        <SheetContent side="right" className="flex-1 px-4">
            <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
            </SheetHeader>

            <Cart />
        </SheetContent>
    )
}