import type { CatalogItem } from "@/types/Catalog";
import { useCart } from "@/hooks/useCart";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/buttons/button";

export default function ItemCard({ item }: { item: CatalogItem }) {
    const { addItem } = useCart();

    return (
        <Card data-testid="catalog-card" className="w-[90dvw] md:w-72 lg:w-96">
            <CardHeader className="flex flex-col gap-0">
                <CardTitle className="text-lg">
                    {item.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                        Ref: {item.code}
                </p>
            </CardHeader>

            <div className="flex gap-4 justify-between">
                <CardContent>
                    <p className="text-xl font-bold text-main">
                        {item.price.toFixed(2)}€
                    </p>
                </CardContent>

                <CardFooter>
                    <Button
                        data-testid="add-button" 
                        onClick={() =>  addItem(item)}
                        size="default"
                    >
                        Add to cart
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
}
