import Images from "./components/Images";
import Information from "./components/Information";
import Navigation from "./components/Navigation";

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

const product = {
  company: "Sneaker Company",
  model: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything the
    weather can offer.`,
  images: [
    { image: "../images/image-product-1.jpg" },
    { image: "../images/image-product-2.jpg" },
    { image: "../images/image-product-3.jpg" },
    { image: "../images/image-product-4.jpg" },
  ],
  thumbnails: [
    { thumbnail: "../image-product-1-thumbnail.jpg" },
    { thumbnail: "../images/image-product-2-thumbnail.jpg" },
    { thumbnail: "../images/image-product-3-thumbnail.jpg" },
    { thumbnail: "../images/image-product-4-thumbnail.jpg" },
  ],
  price: 250,
  discountedPrice: 125,
};

export default function App() {
  return (
    <main className="font-kumbhSans overflow-hidden">
      <Navigation />
      <section className=" grid grid-cols-1">
        <Images product={product} />
        <Information product={product} />
      </section>
    </main>
  );
}
