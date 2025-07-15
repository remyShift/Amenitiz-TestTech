import type { CatalogItem } from "@/types/Catalog";
import { useCart } from "@/hooks/useCart";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/buttons/button";
import { toast } from "sonner";

export default function ItemCard({ item }: { item: CatalogItem }) {
    const { addItem } = useCart();

    return (
        <Card data-testid="catalog-card" className="md:w-72 lg:w-96">
            <CardHeader className="flex flex-col gap-0">
                <CardTitle className="text-lg">
                    {item.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                        Ref: {item.code}
                </p>
            </CardHeader>

            <CardContent>
                <p className="text-xl font-bold text-main text-right">
                    {item.price.toFixed(2)}€
                </p>
            </CardContent>

            <CardFooter>
                <Button
                    data-testid="add-button" 
                    onClick={() => {
                        toast.promise(addItem(item), {
                            loading: "Adding item to cart...",
                            success: () => {
                                return `Item added to cart`
                            },
                            error: "Error adding item to cart",
                        })
                    }}
                    size="lg"
                >
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}
