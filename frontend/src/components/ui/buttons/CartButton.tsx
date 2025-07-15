import { SheetTrigger } from '../drawer/sheet'
import { Button } from './button'
import { ShoppingCart } from 'lucide-react'
import { Badge } from '../badge'
import { useCart } from '@/hooks/useCart'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CartButton() {
    const { items } = useCart()
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        setTotalItems(items.reduce((sum, item) => sum + item.quantity, 0))
    }, [items, totalItems])

    return (
        <SheetTrigger asChild>
            <Button variant="neutral" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                    <Badge 
                        variant="destructive"
                        className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                        {totalItems}
                    </Badge>
                )}
            </Button>
        </SheetTrigger>
    )
}
