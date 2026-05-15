export type IndustryKey = 'it-web' | 'medical' | 'care' | 'food' | 'retail';

export interface SnsLinks {
  x?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
}

export interface Company {
  id: string;
  name: string;
  nameKana: string;
  industry: IndustryKey;
  size: 'large' | 'mid' | 'small';
  description: string;
  sns: SnsLinks;
  snsCount: number; // 保有SNS数（透明性スコア代わり）
  tags: string[];
  website?: string;
}

export interface Industry {
  key: IndustryKey;
  label: string;
  labelEn: string;
  description: string;
  emoji: string;
  agentLabel: string;
  agentHref: string; // 転職エージェントCTA（将来アフィリリンクに差し替え）
}

export const industries: Industry[] = [
  {
    key: 'it-web',
    label: 'IT・Web',
    labelEn: 'IT / Web',
    description: 'テック系・スタートアップ・SaaS・ゲーム会社の採用SNSをまとめました。',
    emoji: '💻',
    agentLabel: 'ITエンジニア向け転職エージェントを見る',
    agentHref: 'https://levtech.jp/', // 仮
  },
  {
    key: 'medical',
    label: '看護・医療',
    labelEn: 'Medical',
    description: '病院・クリニック・医療法人の採用SNSをまとめました。',
    emoji: '🏥',
    agentLabel: '看護師向け転職エージェントを見る',
    agentHref: 'https://kango-oshigoto.jp/', // 仮
  },
  {
    key: 'care',
    label: '介護・福祉',
    labelEn: 'Care / Welfare',
    description: '介護施設・特養・訪問介護の採用SNSをまとめました。',
    emoji: '🤝',
    agentLabel: '介護職向け転職エージェントを見る',
    agentHref: 'https://kaigo.mynavi.jp/', // 仮
  },
  {
    key: 'food',
    label: '飲食・フード',
    labelEn: 'Food & Restaurant',
    description: '飲食チェーン・レストラン・カフェの採用SNSをまとめました。',
    emoji: '🍔',
    agentLabel: '飲食業界の求人を見る',
    agentHref: 'https://r-job.jp/', // 仮
  },
  {
    key: 'retail',
    label: '小売・販売',
    labelEn: 'Retail',
    description: '小売チェーン・アパレル・EC企業の採用SNSをまとめました。',
    emoji: '🛍️',
    agentLabel: '小売・販売の求人を見る',
    agentHref: 'https://tenshoku.mynavi.jp/', // 仮
  },
];

export const companies: Company[] = [
  // ── IT・Web ──────────────────────────────
  {
    id: 'cyberagent',
    name: 'サイバーエージェント',
    nameKana: 'さいばーえーじぇんと',
    industry: 'it-web',
    size: 'large',
    description: 'AbemaTV・Ameba・広告事業を展開。新卒採用Instagramで内定者が社内情報を発信。',
    sns: {
      x: 'https://x.com/ca_recruit_info',
      instagram: 'https://www.instagram.com/ca_recruit_info/',
      youtube: 'https://www.youtube.com/@CyberAgentRecruit',
    },
    snsCount: 3,
    tags: ['ゲーム', '広告', 'メディア', 'スタートアップ文化'],
    website: 'https://www.cyberagent.co.jp/',
  },
  {
    id: 'recruit',
    name: 'リクルート',
    nameKana: 'りくるーと',
    industry: 'it-web',
    size: 'large',
    description: 'Indeed・SUUMOなど多数のサービスを展開。Instagramで社員のリアルを発信中。',
    sns: {
      instagram: 'https://www.instagram.com/recruit___official/',
      x: 'https://x.com/recruit_official',
    },
    snsCount: 2,
    tags: ['HR', 'SaaS', '大企業', '多様なキャリア'],
    website: 'https://www.recruit.co.jp/',
  },
  {
    id: 'mercari',
    name: 'メルカリ',
    nameKana: 'めるかり',
    industry: 'it-web',
    size: 'large',
    description: 'フリマアプリNo.1。英語公用語・フルリモート推進など先進的な働き方で知られる。',
    sns: {
      x: 'https://x.com/mercari_dev',
      instagram: 'https://www.instagram.com/mercari_jp/',
      youtube: 'https://www.youtube.com/@mercari_jp',
    },
    snsCount: 3,
    tags: ['フルリモート', '英語公用語', 'EC', 'グローバル'],
    website: 'https://about.mercari.com/',
  },
  {
    id: 'smarthr',
    name: 'SmartHR',
    nameKana: 'すまーとHR',
    industry: 'it-web',
    size: 'mid',
    description: 'クラウド人事労務ソフトウェア。フルリモート・フレックスで働き方が柔軟。',
    sns: {
      x: 'https://x.com/SmartHR_jp',
      instagram: 'https://www.instagram.com/smarthr_jp/',
    },
    snsCount: 2,
    tags: ['SaaS', 'フルリモート', 'フレックス', 'B2B'],
    website: 'https://smarthr.co.jp/',
  },
  {
    id: 'freee',
    name: 'freee',
    nameKana: 'ふりー',
    industry: 'it-web',
    size: 'mid',
    description: '会計・人事クラウドサービス。ミッション「スモールビジネスを、世界の主役に。」を掲げる。',
    sns: {
      x: 'https://x.com/freee_hd',
      instagram: 'https://www.instagram.com/freee_jp/',
    },
    snsCount: 2,
    tags: ['SaaS', 'フィンテック', 'スタートアップ', 'B2B'],
    website: 'https://corp.freee.co.jp/',
  },
  {
    id: 'dena',
    name: 'DeNA',
    nameKana: 'でぃーえぬえー',
    industry: 'it-web',
    size: 'large',
    description: 'ゲーム・ヘルスケア・スポーツ事業を展開。エンジニアブログで技術発信が活発。',
    sns: {
      x: 'https://x.com/dena_recruit',
      youtube: 'https://www.youtube.com/@DeNA_Recruit',
    },
    snsCount: 2,
    tags: ['ゲーム', 'ヘルスケア', 'スポーツ', '大企業'],
    website: 'https://dena.com/',
  },
  {
    id: 'sansan',
    name: 'Sansan',
    nameKana: 'さんさん',
    industry: 'it-web',
    size: 'mid',
    description: '名刺管理・B2B SaaS。徳島の山奥にサテライトオフィス「神山ラボ」を持つユニークな企業文化。',
    sns: {
      x: 'https://x.com/Sansan_PR',
      instagram: 'https://www.instagram.com/sansan_official/',
    },
    snsCount: 2,
    tags: ['SaaS', 'B2B', 'ユニークな文化', 'リモート'],
    website: 'https://jp.corp-sansan.com/',
  },
  {
    id: 'layerx',
    name: 'LayerX',
    nameKana: 'れいやーえっくす',
    industry: 'it-web',
    size: 'small',
    description: 'バクラク事業・AI事業を展開するスタートアップ。Xでの情報発信が特に活発。',
    sns: {
      x: 'https://x.com/LayerX_PR',
    },
    snsCount: 1,
    tags: ['スタートアップ', 'AI', 'FinTech', 'B2B'],
    website: 'https://layerx.co.jp/',
  },

  // ── 看護・医療 ──────────────────────────────
  {
    id: 'st-lukes',
    name: '聖路加国際病院',
    nameKana: 'せいるかこくさいびょういん',
    industry: 'medical',
    size: 'large',
    description: '東京・築地の国際病院。ICU公式Instagramで現場の様子をリアルに発信中。',
    sns: {
      instagram: 'https://www.instagram.com/st.lukes.icu/',
    },
    snsCount: 1,
    tags: ['急性期', '国際病院', '東京', 'ICU'],
    website: 'https://hospital.luke.ac.jp/',
  },
  {
    id: 'tokushukai',
    name: '徳洲会グループ',
    nameKana: 'とくしゅうかいぐるーぷ',
    industry: 'medical',
    size: 'large',
    description: '全国71病院を展開する医療グループ。TikTokでフォロワー6,000超の看護師採用SNSが話題。',
    sns: {
      tiktok: 'https://www.tiktok.com/@tokushukai_nurse',
    },
    snsCount: 1,
    tags: ['全国展開', '急性期', '看護師採用', 'TikTok採用'],
    website: 'https://www.tokushukai.or.jp/',
  },
  {
    id: 'juntendo',
    name: '順天堂医院',
    nameKana: 'じゅんてんどういいん',
    industry: 'medical',
    size: 'large',
    description: '東京の大学病院。看護部の公式SNSで院内の雰囲気を発信している。',
    sns: {
      instagram: 'https://www.instagram.com/juntendo_hospital/',
      x: 'https://x.com/juntendo_hosp',
    },
    snsCount: 2,
    tags: ['大学病院', '東京', '急性期', '研究'],
    website: 'https://www.juntendo.ac.jp/hospital/',
  },
  {
    id: 'kameda',
    name: '亀田総合病院',
    nameKana: 'かめだそうごうびょういん',
    industry: 'medical',
    size: 'mid',
    description: '千葉・鴨川の高機能病院。SNSでの情報発信が積極的で採用力が高い病院として知られる。',
    sns: {
      x: 'https://x.com/kameda_nurse',
      instagram: 'https://www.instagram.com/kameda_nurse/',
    },
    snsCount: 2,
    tags: ['急性期', '千葉', 'キャリアアップ', '研究'],
    website: 'https://www.kameda.com/',
  },

  // ── 介護・福祉 ──────────────────────────────
  {
    id: 'benesse-style-care',
    name: 'ベネッセスタイルケア',
    nameKana: 'べねっせすたいるけあ',
    industry: 'care',
    size: 'large',
    description: 'ベネッセグループの介護事業。有料老人ホーム・サービス付き高齢者向け住宅を展開。',
    sns: {
      instagram: 'https://www.instagram.com/benesse_stylecare/',
      x: 'https://x.com/benesse_care',
    },
    snsCount: 2,
    tags: ['有料老人ホーム', '全国展開', '大企業', 'キャリアアップ'],
    website: 'https://www.benesse-style-care.co.jp/',
  },
  {
    id: 'nichii',
    name: 'ニチイ学館',
    nameKana: 'にちいがっかん',
    industry: 'care',
    size: 'large',
    description: '介護・医療・保育事業を展開する大手。介護職員の育成・資格取得支援が充実。',
    sns: {
      x: 'https://x.com/nichii_official',
      instagram: 'https://www.instagram.com/nichii_official/',
    },
    snsCount: 2,
    tags: ['全国展開', '資格取得支援', '訪問介護', '大企業'],
    website: 'https://www.nichiigakkan.co.jp/',
  },
  {
    id: 'sompocare',
    name: 'SOMPOケア',
    nameKana: 'そんぽけあ',
    industry: 'care',
    size: 'large',
    description: 'SOMPOグループの介護事業。ITを活用したスマート介護を推進中。',
    sns: {
      x: 'https://x.com/sompocare_jp',
      youtube: 'https://www.youtube.com/@sompocare',
    },
    snsCount: 2,
    tags: ['スマート介護', 'テクノロジー', '全国展開', '大企業'],
    website: 'https://sompocare.com/',
  },
  {
    id: 'charm-care',
    name: 'チャーム・ケア・コーポレーション',
    nameKana: 'ちゃーむけあこーぽれーしょん',
    industry: 'care',
    size: 'mid',
    description: '関西発の有料老人ホーム運営。上場企業で安定した経営が特徴。',
    sns: {
      instagram: 'https://www.instagram.com/charmcare_official/',
    },
    snsCount: 1,
    tags: ['有料老人ホーム', '関西', '上場', '安定'],
    website: 'https://www.charm.co.jp/',
  },

  // ── 飲食・フード ──────────────────────────────
  {
    id: 'mcdonalds',
    name: 'マクドナルド',
    nameKana: 'まくどなるど',
    industry: 'food',
    size: 'large',
    description: '国内約3,000店舗。X・Instagram・YouTubeで採用コンテンツを積極発信。',
    sns: {
      x: 'https://x.com/McDonaldsJapan',
      instagram: 'https://www.instagram.com/mcdonalds.jp/',
      youtube: 'https://www.youtube.com/@McdonaldsJapan',
    },
    snsCount: 3,
    tags: ['外食チェーン', '全国展開', 'アルバイト', 'グローバル'],
    website: 'https://www.mcdonalds.co.jp/',
  },
  {
    id: 'starbucks',
    name: 'スターバックス',
    nameKana: 'すたーばっくす',
    industry: 'food',
    size: 'large',
    description: '国内約1,900店舗。「第三の場所」文化を体現するカフェチェーン。SNSでのブランド発信が強い。',
    sns: {
      x: 'https://x.com/Starbucks_J',
      instagram: 'https://www.instagram.com/starbucksjapan/',
      tiktok: 'https://www.tiktok.com/@starbucksjapan',
    },
    snsCount: 3,
    tags: ['カフェ', 'ブランド', '全国展開', '接客重視'],
    website: 'https://www.starbucks.co.jp/',
  },
  {
    id: 'kushikatsu-tanaka',
    name: '串カツ田中',
    nameKana: 'くしかつたなか',
    industry: 'food',
    size: 'mid',
    description: '居酒屋チェーン。TikTokでの積極的な採用動画発信で若手採用に成功している企業として有名。',
    sns: {
      tiktok: 'https://www.tiktok.com/@kushikatsu_tanaka',
      instagram: 'https://www.instagram.com/kushikatsu_tanaka/',
      x: 'https://x.com/KushikatsuTanaka',
    },
    snsCount: 3,
    tags: ['居酒屋', 'TikTok採用', '若手採用', '急成長'],
    website: 'https://kushikatsu-tanaka.com/',
  },
  {
    id: 'watami',
    name: 'ワタミ',
    nameKana: 'わたみ',
    industry: 'food',
    size: 'large',
    description: '居酒屋・から揚げ・宅食事業を展開。過去の労務問題から改善に取り組み、情報開示を強化。',
    sns: {
      x: 'https://x.com/watami_jp',
      instagram: 'https://www.instagram.com/watami_official/',
      youtube: 'https://www.youtube.com/@watami',
    },
    snsCount: 3,
    tags: ['居酒屋', '宅食', '全国展開', '改善中'],
    website: 'https://www.watami.co.jp/',
  },
  {
    id: 'zensho',
    name: 'ゼンショー（すき家）',
    nameKana: 'ぜんしょー',
    industry: 'food',
    size: 'large',
    description: 'すき家・はま寿司・ジョリーパスタ等を展開。国内最大の外食グループ。',
    sns: {
      x: 'https://x.com/sukiya_jp',
      instagram: 'https://www.instagram.com/sukiya_jp/',
    },
    snsCount: 2,
    tags: ['牛丼', '全国展開', '24時間', 'グループ会社'],
    website: 'https://www.zensho.com/',
  },

  // ── 小売・販売 ──────────────────────────────
  {
    id: 'uniqlo',
    name: 'ユニクロ（ファーストリテイリング）',
    nameKana: 'ゆにくろ',
    industry: 'retail',
    size: 'large',
    description: 'グローバルアパレルチェーン。TikTokフォロワー583万人超。SNS発信力が業界最強クラス。',
    sns: {
      x: 'https://x.com/UNIQLO_JP',
      instagram: 'https://www.instagram.com/uniqlo_jp/',
      tiktok: 'https://www.tiktok.com/@uniqlo_jp',
      youtube: 'https://www.youtube.com/@UNIQLO_JP',
    },
    snsCount: 4,
    tags: ['アパレル', 'グローバル', 'SPA', '大企業'],
    website: 'https://www.fastretailing.com/jp/',
  },
  {
    id: 'nitori',
    name: 'ニトリ',
    nameKana: 'にとり',
    industry: 'retail',
    size: 'large',
    description: '家具・インテリアチェーン。新卒採用公式Instagramで社員のリアルを発信中（9,000フォロワー）。',
    sns: {
      instagram: 'https://www.instagram.com/nitorishinsotsu/',
      x: 'https://x.com/NitoriOfficial',
    },
    snsCount: 2,
    tags: ['家具', 'インテリア', '全国展開', 'SPA'],
    website: 'https://www.nitori.co.jp/',
  },
  {
    id: 'donki',
    name: 'ドン・キホーテ（PPIH）',
    nameKana: 'どんきほーて',
    industry: 'retail',
    size: 'large',
    description: 'ディスカウントストアチェーン。採用専用Instagram @donki_recruitで社員の声を発信。',
    sns: {
      instagram: 'https://www.instagram.com/donki_recruit/',
      x: 'https://x.com/donki_official',
    },
    snsCount: 2,
    tags: ['ディスカウント', '全国展開', '24時間', '独自文化'],
    website: 'https://www.ppih.co.jp/',
  },
  {
    id: 'aeon',
    name: 'イオン',
    nameKana: 'いおん',
    industry: 'retail',
    size: 'large',
    description: '国内最大の小売グループ。採用専用Instagram @aeon_official_recruitmentで採用情報を発信。',
    sns: {
      instagram: 'https://www.instagram.com/aeon_official_recruitment/',
      x: 'https://x.com/AEON_JP',
    },
    snsCount: 2,
    tags: ['スーパー', '総合流通', '全国展開', '安定'],
    website: 'https://www.aeon.info/',
  },
  {
    id: 'workman',
    name: 'ワークマン',
    nameKana: 'わーくまん',
    industry: 'retail',
    size: 'large',
    description: '作業服から一般向けアパレルへ変貌を遂げた急成長小売。SNSマーケティングが秀逸。',
    sns: {
      x: 'https://x.com/workman_jp',
      instagram: 'https://www.instagram.com/workman_jp/',
      youtube: 'https://www.youtube.com/@workman_official',
    },
    snsCount: 3,
    tags: ['アパレル', '急成長', 'コスパ', 'SPA'],
    website: 'https://www.workman.co.jp/',
  },
];

export function getIndustry(key: IndustryKey): Industry | undefined {
  return industries.find(i => i.key === key);
}

export function getCompaniesByIndustry(key: IndustryKey): Company[] {
  return companies.filter(c => c.industry === key);
}

export function getSnsLabel(platform: keyof SnsLinks): string {
  const labels: Record<keyof SnsLinks, string> = {
    x: 'X (Twitter)',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    youtube: 'YouTube',
  };
  return labels[platform];
}

export const SNS_ICONS: Record<keyof SnsLinks, { color: string; bg: string }> = {
  x: { color: 'text-white', bg: 'bg-black' },
  instagram: { color: 'text-white', bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400' },
  tiktok: { color: 'text-white', bg: 'bg-black' },
  youtube: { color: 'text-white', bg: 'bg-red-600' },
};
