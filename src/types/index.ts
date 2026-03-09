export type VerticalType = "medicinal" | "therapeutic" | "gourmet";

export interface Retailer {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  verticals: VerticalType[];
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  phone: string;
  website: string;
  email: string;
  hours: Record<string, string>;
  rating: number;
  reviewCount: number;
  featured: boolean;
  imageUrl: string;
  products: Product[];
  tags: string[];
}

export interface Product {
  name: string;
  category: VerticalType;
  price: string;
  description: string;
}

export interface Species {
  slug: string;
  commonName: string;
  scientificName: string;
  category: VerticalType;
  description: string;
  benefits: string[];
  imageEmoji: string;
  funFact: string;
}

export interface LegalStatus {
  state: string;
  abbreviation: string;
  medicinal: "legal" | "decriminalized" | "illegal" | "pending";
  therapeutic: "legal" | "decriminalized" | "illegal" | "pending";
  gourmet: "legal";
  notes: string;
}
