export interface Product {
  id: number;
  itemAmount: number;
  company: string;
  model: string;
  image: string;
  description: string;
  images: { image: string }[];
  thumbnails: { thumbnail: string }[];
  price: number;
  discountedPrice: number;
}

export interface CartProp {
  cart: Product[];
  setCart: (cart: Product[]) => void;
}
