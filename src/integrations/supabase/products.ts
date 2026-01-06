
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
    const { data, error } = await supabase
        .from('products')
        .select('*');

    if (error) {
        console.error('Error fetching products:', error);
        throw error;
    }

    // Map image_url (if relative path from seed) to be used directly
    // If we kept image_url as '/images/products/...' it works fine.

    return data || [];
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching product:', error);
        return null;
    }

    return data;
};
