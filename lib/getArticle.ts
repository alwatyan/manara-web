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
    .from('news_cache')
    .select('articles')
    .single();

  if (error || !data) return null;

  const articles = (data.articles ?? []) as Article[];
  return articles.find((a) => a.id === id) ?? null;
}
