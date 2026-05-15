import type { Metadata } from 'next';
import Link from 'next/link';
import { industries, companies } from '@/lib/data';

export const metadata: Metadata = {
  title: '社風チェック - 企業の採用SNSをまとめて比較',
  description: '転職・就活前に企業の雰囲気を確認。IT・医療・介護・飲食・小売など業界別に企業の公式採用SNS（X・Instagram・TikTok・YouTube）をまとめました。',
  alternates: { canonical: 'https://shafu.taishoku-todoke.net/' },
  openGraph: {
    title: '社風チェック - 企業の採用SNSをまとめて比較',
    description: '転職・就活前に企業の雰囲気を確認。業界別に企業の採用SNSをまとめました。',
    url: 'https://shafu.taishoku-todoke.net/',
  },
};

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '社風チェック',
  url: 'https://shafu.taishoku-todoke.net',
  description: '業界別に企業の採用SNSをまとめた転職・就活支援サイト',
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />

      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            入社前に、社風を見抜く
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            企業の公式採用SNSをまとめました。<br />
            リアルな職場の雰囲気・文化・社員の声を業界別に確認できます。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-6">業界から探す</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map(industry => {
            const count = companies.filter(c => c.industry === industry.key).length;
            return (
              <Link
                key={industry.key}
                href={`/${industry.key}`}
                className="group bg-white rounded-2xl border border-zinc-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{industry.emoji}</span>
                  <span className="text-xs text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">{count}社</span>
                </div>
                <h3 className="font-bold text-base group-hover:text-blue-600 transition-colors mb-1">{industry.label}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{industry.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 text-center">
          <h2 className="font-bold text-base mb-2">このサイトについて</h2>
          <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            転職・就活の際、企業の公式採用SNSは社風を知るための貴重な情報源です。
            社風チェックでは、各企業が公式に発信している採用・広報SNSアカウントを業界別にまとめています。
            掲載情報は定期的に確認していますが、最新情報は各企業の公式サイトをご確認ください。
          </p>
        </div>
      </section>
    </>
  );
}
