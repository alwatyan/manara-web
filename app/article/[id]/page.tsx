import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticle } from '@/lib/getArticle';

// TODO: serve actual 410 status
export const dynamic = 'force-dynamic';

function formatRelativeAr(iso: string): string {
  const rtf = new Intl.RelativeTimeFormat('ar', { numeric: 'auto' });
  const diffSec = Math.round((new Date(iso).getTime() - Date.now()) / 1000);
  const abs = Math.abs(diffSec);
  if (abs < 60) return rtf.format(diffSec, 'second');
  if (abs < 3600) return rtf.format(Math.round(diffSec / 60), 'minute');
  if (abs < 86400) return rtf.format(Math.round(diffSec / 3600), 'hour');
  if (abs < 86400 * 7) return rtf.format(Math.round(diffSec / 86400), 'day');
  if (abs < 86400 * 30) return rtf.format(Math.round(diffSec / (86400 * 7)), 'week');
  if (abs < 86400 * 365) return rtf.format(Math.round(diffSec / (86400 * 30)), 'month');
  return rtf.format(Math.round(diffSec / (86400 * 365)), 'year');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle(id);
  if (!article) return { title: 'منارة' };

  const title = `${article.headline} — منارة`;
  const description = article.summary;
  const images = article.image_url ? [article.image_url] : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(images && { images }),
      type: 'article',
      locale: 'ar_AR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(images && { images }),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticle(id);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1A1A]">
      <header className="border-b border-[#E5DFD3]">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-end">
          <span className="font-serif text-sm tracking-wide">منارة</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        {article.isBreaking && (
          <span className="inline-block bg-[#C8102E] text-white text-xs font-medium px-2 py-1 rounded mb-4">
            عاجل
          </span>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl leading-tight mb-4">
          {article.headline}
        </h1>

        <div className="text-sm text-[#6B6B6B] mb-6">
          {article.source} · {formatRelativeAr(article.pubDate)}
        </div>

        {article.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image_url}
            alt=""
            className="w-full max-h-[400px] object-cover rounded-lg mb-6"
          />
        )}

        <p className="text-base leading-loose mb-8">{article.summary}</p>

        <div className="flex flex-col gap-3">
          {/* TODO: replace with App Store URL when live */}
          <a
            href="#"
            className="bg-[#1A1A1A] text-[#F5F0E8] text-center px-6 py-3 rounded-lg font-medium"
          >
            حمّل تطبيق منارة
          </a>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm text-[#6B6B6B] hover:text-[#1A1A1A] py-2"
          >
            اقرأ على {article.source} ←
          </a>
        </div>
      </main>

      <footer className="max-w-2xl mx-auto px-6 py-8 text-center text-xs text-[#6B6B6B]">
        © منارة
      </footer>
    </div>
  );
}
