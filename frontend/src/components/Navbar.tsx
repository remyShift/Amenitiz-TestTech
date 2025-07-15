import { Sheet } from "@/components/ui/drawer/sheet"
import CartButton from "@/components/ui/buttons/CartButton"
import CartDrawer from "@/components/ui/drawer/CartDrawer"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full flex justify-between items-center bg-white border-b-2 border-border shadow-shadow p-6">
            <h1 className="text-2xl font-bold text-foreground">
                Amenitiz x Rémy Cassagne
            </h1>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <CartButton />

                <CartDrawer />
            </Sheet>
        </nav>
    )
}