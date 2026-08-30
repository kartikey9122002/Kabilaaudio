import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadMediaAsset(file: File, folder: string = 'general') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${folder}/${Date.now()}.${fileExt}`;
  
  const { data, error } = await supabase.storage
    .from('kabila-media')
    .upload(fileName, file, { upsert: true });

  if (error) throw error;
  
  const { data: publicUrlData } = supabase.storage
    .from('kabila-media')
    .getPublicUrl(data.path);
    
  return publicUrlData.publicUrl;
}
