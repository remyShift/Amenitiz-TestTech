import * as React from "react"
import { Sheet } from "@/components/ui/drawer/sheet"
import CartButton from "@/components/ui/buttons/CartButton"
import CartDrawer from "@/components/ui/drawer/CartDrawer"

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="w-full bg-background border-b-2 border-border shadow-shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                
                <div className="flex-1 text-center">
                    <h1 className="text-xl font-bold text-foreground">
                    Amenitiz x Rémy Cassagne
                    </h1>
                </div>

                <div className="flex-1 flex justify-end">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <CartButton />

                        <CartDrawer />
                    </Sheet>
                </div>
            </div>
        </nav>
    )
} 