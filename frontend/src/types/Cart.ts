import type { CatalogItem } from '@/types/Catalog';

export type CartItem = CatalogItem & { quantity: number };
