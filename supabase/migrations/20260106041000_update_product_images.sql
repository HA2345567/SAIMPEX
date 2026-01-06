-- Migration to update product images with new unique assets

-- 1. Update Gold Button (using mb-01 as example target for gold button)
UPDATE public.products 
SET image_url = '/images/products/gold_button_macro.png' 
WHERE sku = 'mb-01';

UPDATE public.products 
SET image_url = '/images/products/gold_button_macro.png' 
WHERE sku = 'mb-07'; -- High polish gold dome

-- 2. Update Antique Brass Button (using mb-02 as example target)
UPDATE public.products 
SET image_url = '/images/products/antique_brass_button.png' 
WHERE sku = 'mb-02';

UPDATE public.products 
SET image_url = '/images/products/antique_brass_button.png' 
WHERE sku = 'mb-04'; -- Textured Bronze also fits reasonably well or mb-06

-- 3. Update Gold Zipper (using zp-01 #5 Metal Zipper Gold or Antique Brass)
UPDATE public.products 
SET image_url = '/images/products/gold_zipper_detail.png' 
WHERE sku = 'zp-01';

UPDATE public.products 
SET image_url = '/images/products/gold_zipper_detail.png' 
WHERE sku = 'zp-05'; -- Luxury Riri Style (Gold)

-- 4. Update Silver Buckle (using bk-01 Classic Pin Buckle)
UPDATE public.products 
SET image_url = '/images/products/silver_buckle.png' 
WHERE sku = 'bk-01';
