-- Migration to update remaining product images (Batch 2)

-- 1. Gunmetal Buttons (Bulk)
UPDATE public.products 
SET image_url = '/images/products/gunmetal_buttons_pile.png' 
WHERE sku = 'mb-03';

-- 2. Matte Black Buttons (Bulk)
UPDATE public.products 
SET image_url = '/images/products/matte_black_buttons_pile.png' 
WHERE sku = 'mb-05';

-- 3. Wooden Buttons (Bulk)
UPDATE public.products 
SET image_url = '/images/products/wooden_buttons_pile.png' 
WHERE sku = 'nb-01'; -- Olive Wood
UPDATE public.products 
SET image_url = '/images/products/wooden_buttons_pile.png' 
WHERE sku = 'nb-02'; -- Coconut (Close enough for now, or keep separate if we had it)

-- 4. Horn Buttons (Single, as bulk failed quota)
UPDATE public.products 
SET image_url = '/images/products/horn_button_detail.png' 
WHERE sku = 'nb-03';
