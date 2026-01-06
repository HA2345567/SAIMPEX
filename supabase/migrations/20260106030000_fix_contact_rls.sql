-- Fix RLS policy to allow BOTH anon and authenticated users to insert inquiries

-- First, drop the existing policy that might be too restrictive (only anon)
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON public.inquiries;

-- Create a new comprehensive policy for insertion
CREATE POLICY "Enable insert for all users"
ON public.inquiries
FOR INSERT
TO public
WITH CHECK (true);
