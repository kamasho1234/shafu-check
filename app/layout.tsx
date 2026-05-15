import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: {
    default: '社風チェック - 企業の採用SNSをまとめて比較',
    template: '%s | 社風チェック',
  },
  description:
    '転職・就活前に企業の雰囲気を確認。IT・医療・介護・飲食・小売など業界別に企業の公式採用SNS（X・Instagram・TikTok・YouTube）をまとめました。',
  metadataBase: new URL('https://shafu-check.net'),
  openGraph: {
    siteName: '社風チェック',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 font-sans antialiased">
        <header className="bg-white border-b border-zinc-200">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight text-zinc-900 hover:text-blue-600 transition-colors">
              社風チェック
            </Link>
            <nav className="flex gap-6 text-sm text-zinc-600">
              <Link href="/it-web" className="hover:text-zinc-900 transition-colors">IT・Web</Link>
              <Link href="/medical" className="hover:text-zinc-900 transition-colors">看護・医療</Link>
              <Link href="/food" className="hover:text-zinc-900 transition-colors">飲食</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-200 bg-white mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>© 2025 社風チェック</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-zinc-700 transition-colors">プライバシーポリシー</Link>
              <Link href="/about" className="hover:text-zinc-700 transition-colors">このサイトについて</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
