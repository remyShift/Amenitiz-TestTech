import { useCatalog } from "@/hooks/useCatalog";
import type { CatalogItem } from "@/types/Catalog";
import ItemCard from "@/components/cards/ItemCard";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Catalog() {
    const { isLoading, error, data: catalog } = useCatalog();
    const [isMinimumLoadingTime, setIsMinimumLoadingTime] = useState(true);
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMinimumLoadingTime(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading || isMinimumLoadingTime) {
            const interval = setInterval(() => {
                setProgressValue((prev) => {
                    if (prev >= 100) return 0;
                    return prev + 2;
                });
            }, 50);

            return () => clearInterval(interval);
        }
    }, [isLoading, isMinimumLoadingTime]);

    const shouldShowLoader = isLoading || isMinimumLoadingTime;

    if (shouldShowLoader) {
        return (
            <Progress value={progressValue} className="w-64" />
        );
    }

    if (error) {
        return <div data-testid="error-message">
            <p>Error: {error.message}</p>
            <p>Please try again later.</p>
        </div>;
    }

    return (
        <div data-testid="catalog" className="flex flex-col gap-4">
            {catalog!.map((item: CatalogItem) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}