import { supabase } from './supabase';

export type Article = {
  id: string;
  headline: string;
  summary: string;
  lang: 'ar';
  source: string;
  category: string;
  isBreaking: boolean;
  link: string;
  pubDate: string;
  image_url?: string;
};

export async function getArticle(id: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('id, headline, summary, lang, source, category, isBreaking:is_breaking, link, pubDate:pub_date, image_url')
    .eq('id', id)
    .single();

  if (error || !data) return null;

  return data as Article;
}
