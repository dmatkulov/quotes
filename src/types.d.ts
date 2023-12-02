export interface LinkItem {
  category: string;
  id: string;
}

export interface Quote {
  author: string;
  category: string;
  quote: string;
}

export interface QuoteData {
  [id: string]: Quote;
}