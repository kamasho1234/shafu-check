import type { Company, SnsLinks } from '@/lib/data';

const SNS_META: Record<keyof SnsLinks, { label: string; bg: string; textColor: string; icon: string }> = {
  x: {
    label: 'X',
    bg: 'bg-black',
    textColor: 'text-white',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.623zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  instagram: {
    label: 'Instagram',
    bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    textColor: 'text-white',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  tiktok: {
    label: 'TikTok',
    bg: 'bg-black',
    textColor: 'text-white',
    icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z',
  },
  youtube: {
    label: 'YouTube',
    bg: 'bg-red-600',
    textColor: 'text-white',
    icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
};

const SIZE_LABEL: Record<Company['size'], string> = {
  large: '大手',
  mid: '中堅',
  small: 'スタートアップ',
};

const SIZE_COLOR: Record<Company['size'], string> = {
  large: 'bg-blue-50 text-blue-700',
  mid: 'bg-emerald-50 text-emerald-700',
  small: 'bg-violet-50 text-violet-700',
};

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="bg-white rounded-2xl border border-zinc-200 p-5 flex flex-col gap-3 hover:shadow-md hover:border-zinc-300 transition-all">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-base leading-snug">{company.name}</h3>
          <span className="text-xs text-zinc-400">{company.nameKana}</span>
        </div>
        <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${SIZE_COLOR[company.size]}`}>
          {SIZE_LABEL[company.size]}
        </span>
      </div>

      <p className="text-sm text-zinc-600 leading-relaxed">{company.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {company.tags.map(tag => (
          <span key={tag} className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {(Object.entries(company.sns) as [keyof SnsLinks, string][]).map(([platform, url]) => {
          const meta = SNS_META[platform];
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 ${meta.bg} ${meta.textColor} text-xs font-medium px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current shrink-0" aria-hidden="true">
                <path d={meta.icon} />
              </svg>
              {meta.label}
            </a>
          );
        })}
        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors"
          >
            公式サイト
          </a>
        )}
      </div>
    </article>
  );
}
