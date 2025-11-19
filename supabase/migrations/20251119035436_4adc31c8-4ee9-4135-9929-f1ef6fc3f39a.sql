-- Create inquiries table to store contact form submissions
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  whatsapp TEXT,
  product TEXT,
  quantity TEXT,
  sample_request BOOLEAN DEFAULT false,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert inquiries (public form)
CREATE POLICY "Anyone can submit inquiries"
ON public.inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy for reading inquiries (for future admin dashboard)
CREATE POLICY "Authenticated users can view all inquiries"
ON public.inquiries
FOR SELECT
TO authenticated
USING (true);

-- Create policy for updating inquiries (for future admin dashboard)
CREATE POLICY "Authenticated users can update inquiries"
ON public.inquiries
FOR UPDATE
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_inquiries_updated_at
BEFORE UPDATE ON public.inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance on status queries
CREATE INDEX idx_inquiries_status ON public.inquiries(status);
CREATE INDEX idx_inquiries_created_at ON public.inquiries(created_at DESC);