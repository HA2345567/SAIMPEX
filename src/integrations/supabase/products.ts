
import { supabase } from "./client";

export interface ProductSpec {
    label: string;
    value: string;
}

export interface Product {
    id: string; // UUID
    sku?: string | null;
    name: string;
    category: string;
    image_url: string | null;
    description: string | null;
    specs: ProductSpec[]; // JSONB
    min_order_quantity: number | null;
    in_stock: boolean | null;
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
    try {
        const response = await fetch(`/api/products?id=${encodeURIComponent(id)}`);
        if (!response.ok) {
            if (response.status === 404) return null;
            throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
};
