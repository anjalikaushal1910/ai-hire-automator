-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', false);

-- Create user_resumes table
CREATE TABLE public.user_resumes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  content_type TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE public.user_resumes ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_resumes
CREATE POLICY "Users can view their own resumes" 
ON public.user_resumes 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can upload their own resumes" 
ON public.user_resumes 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own resumes" 
ON public.user_resumes 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own resumes" 
ON public.user_resumes 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create storage policies for resumes
CREATE POLICY "Users can view their own resumes" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'resumes' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own resumes" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'resumes' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own resumes" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'resumes' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own resumes" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'resumes' AND auth.uid()::text = (storage.foldername(name))[1]);