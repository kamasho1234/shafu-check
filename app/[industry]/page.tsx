import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import CompanyCard from '@/components/CompanyCard';
import { industries, companies, getIndustry, getCompaniesByIndustry, type IndustryKey } from '@/lib/data';

interface Props {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return industries.map(i => ({ industry: i.key }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustry(slug as IndustryKey);
  if (!industry) return {};

  const title = `${industry.label}の採用SNSまとめ | 社風チェック`;
  const description = `${industry.label}の企業が発信する採用SNS（X・Instagram・TikTok・YouTube）を一覧にまとめました。転職・就活前の社風確認に。`;

  return {
    title,
    description,
    alternates: { canonical: `https://shafu.taishoku-todoke.net/${slug}/` },
    openGraph: { title, description, url: `https://shafu.taishoku-todoke.net/${slug}/` },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry: slug } = await params;
  const industry = getIndustry(slug as IndustryKey);
  if (!industry) notFound();

  const industryCompanies = getCompaniesByIndustry(slug as IndustryKey);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `${industry.label}の社風はどうやって確認できますか？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `企業の公式採用SNS（X・Instagram・TikTok・YouTube）で社員の声や職場の雰囲気を確認できます。このページでは${industry.label}の主要企業の採用SNSをまとめています。`,
        },
      },
      {
        '@type': 'Question',
        name: `${industry.label}への転職で気をつけることは？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `採用SNSで企業文化・働き方・社員の雰囲気を確認した上で、転職エージェントを活用して詳しい情報を収集することをおすすめします。`,
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '社風チェック', item: 'https://shafu.taishoku-todoke.net' },
      { '@type': 'ListItem', position: 2, name: industry.label, item: `https://shafu.taishoku-todoke.net/${slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqJsonLd, breadcrumbJsonLd]) }} />

      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <nav className="text-xs text-zinc-400 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-zinc-600 transition-colors">社風チェック</Link>
            <span>/</span>
            <span className="text-zinc-700">{industry.label}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            {industry.label}の採用SNSまとめ
          </h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl leading-relaxed">
            {industry.description}
            転職・就活前の社風確認にご活用ください。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-zinc-500">{industryCompanies.length}社掲載</p>
          <div className="flex gap-2 text-xs text-zinc-400">
            <span>SNS数順</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industryCompanies
            .sort((a, b) => b.snsCount - a.snsCount)
            .map(company => (
              <CompanyCard key={company.id} company={company} />
            ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-zinc-900 text-white rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold mb-1">{industry.agentLabel}</p>
            <p className="text-sm text-zinc-400">専門のキャリアアドバイザーに無料で相談できます。</p>
          </div>
          <a
            href={industry.agentHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 bg-white text-zinc-900 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-zinc-100 transition-colors"
          >
            無料で見る
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-lg font-bold mb-4">よくある質問</h2>
        <div className="space-y-3">
          {faqJsonLd.mainEntity.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-zinc-200 overflow-hidden">
              <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none text-sm font-medium hover:bg-zinc-50 transition-colors">
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">Q</span>
                  {faq.name}
                </span>
                <svg className="w-4 h-4 text-zinc-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                <span className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-zinc-100 text-zinc-500 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">A</span>
                  {faq.acceptedAnswer.text}
                </span>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-base font-bold mb-3">他の業界を見る</h2>
        <div className="flex flex-wrap gap-2">
          {industries
            .filter(i => i.key !== slug)
            .map(i => (
              <Link
                key={i.key}
                href={`/${i.key}`}
                className="text-sm bg-white border border-zinc-200 text-zinc-700 px-4 py-2 rounded-full hover:border-zinc-400 transition-colors"
              >
                {i.emoji} {i.label}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
