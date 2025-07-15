import type { CatalogItem } from '@/types/Catalog';

export type CartItem = CatalogItem & { quantity: number };

export interface DiscountInfo {
	product_code: string;
	product_name: string;
	original_price: number;
	discounted_price: number;
	savings: number;
	description: string;
}

export interface CartTotalResponse {
	total: number;
	original_total: number;
	total_savings: number;
	discounts_applied: DiscountInfo[];
}
