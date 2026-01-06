-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  sku TEXT UNIQUE, -- for mb-01 etc
  specs JSONB DEFAULT '[]'::jsonb,
  min_order_quantity INTEGER DEFAULT 500,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view products
CREATE POLICY "Public read access"
ON public.products
FOR SELECT
TO anon
USING (true);

-- Policy: Admins can full access (using existing has_role function)
CREATE POLICY "Admin full access"
ON public.products
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Index for category filtering
CREATE INDEX idx_products_category ON public.products(category);
