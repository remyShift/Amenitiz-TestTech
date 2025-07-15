import type { CatalogItem } from "@/types/Catalog";
import { useCart } from "@/hooks/useCart";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ItemCard({ item }: { item: CatalogItem }) {
    const { addItem } = useCart();

    return (
        <Card data-testid="catalog-card">
            <CardHeader>
                <CardTitle className="text-lg">
                    {item.name}
                </CardTitle>
            </CardHeader>
            
            <CardContent>
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Ref: {item.code}
                    </p>
                    <p className="text-xl font-bold text-main">
                        {item.price}€
                    </p>
                </div>
            </CardContent>
            
            <CardFooter>
                <Button
                    data-testid="add-button" 
                    onClick={() => addItem(item)}
                    size="lg"
                >
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}
