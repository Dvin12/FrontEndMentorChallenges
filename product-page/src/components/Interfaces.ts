export interface Product {
  company: string;
  model: string;
  image: string;
  description: string;
  images: { image: string }[];
  thumbnails: { thumbnail: string }[];
  price: number;
  discountedPrice: number;
}
