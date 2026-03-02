
export type Language = 'es' | 'en' | 'qu';

export interface UserConfig {
  name: string;
  role: string;
  language: Language;
  avatar: string;
}

export interface NicheData {
  name: string;
  revenue: string;
  growth: string;
  sellers: number;
  status: 'High Opportunity' | 'Moderate' | 'Saturated' | 'Stable';
  color: string;
}

export interface WinningProduct {
  name: string;
  niche: string;
  priceEstimate: string;
  reasonWhyWinning: string;
  potentialMargin: string;
  trendScore: number;
  imageUrl: string;
  sourceUrl?: string;
  sourceTitle?: string;
}

export interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
  trendData?: number[];
}
