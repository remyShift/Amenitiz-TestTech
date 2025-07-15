import { useCart } from '@/hooks/useCart'

export default function DiscountInfo() {
    const { discountsApplied, totalSavings, originalTotal } = useCart();

    return (
        <div className="flex flex-col gap-1">
            {discountsApplied.length > 0 && (
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-green-600">Discounts applied :</h3>
                    {discountsApplied.map((discount, index) => (
                        <div key={index} className="flex flex-col gap-1 p-2 bg-green-50 rounded-md">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">{discount.product_name}</span>
                            </div>
                            {discount.description && (
                                <p className="text-xs text-gray-600">{discount.description}</p>
                            )}
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-green-600 font-semibold">
                                    Savings : {discount.savings.toFixed(2)}€
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {totalSavings > 0 && (
                <div className="flex justify-between items-center text-lg font-semibold text-green-600">
                    <p>Total savings :</p>
                    <p>-{totalSavings.toFixed(2)}€</p>
                </div>
            )}

            {totalSavings > 0 && (
                <div className="flex justify-between items-center text-lg text-gray-500">
                    <p>Original price :</p>
                    <p className="line-through">{originalTotal.toFixed(2)}€</p>
                </div>
            )}
        </div>
    )
}
