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
  console.log('[getArticle] id param:', JSON.stringify(id));

  const { data, error } = await supabase
    .from('news_cache')
    .select('articles')
    .single();

  console.log('[getArticle] supabase: !!data =', !!data, '| articles.length =', data?.articles?.length, '| error =', error?.message ?? null);

  if (error || !data) return null;

  const articles = (data.articles ?? []) as Article[];
  console.log('[getArticle] first 3 article ids:', articles.slice(0, 3).map((a) => a.id));

  const found = articles.find((a) => a.id === id) ?? null;
  console.log('[getArticle] find matched:', !!found);

  return found;
}
