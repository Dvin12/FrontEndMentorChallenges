import { useState } from "react";
import Item from "./Item";

export interface Items {
  title: string;
  description: string;
  imageDesktop: string;
  imageMobile: string;
}

const header: Items[] = [
  {
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imageDesktop: "./assets/images/desktop-image-hero-1.jpg",
    imageMobile: "../assets/images/mobile-image-hero-1.jpg",
  },

  {
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imageDesktop: "./assets/images/desktop-image-hero-2.jpg",
    imageMobile: "./assets/images/mobile-image-hero-2.jpg",
  },

  {
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imageDesktop: "./assets/images/desktop-image-hero-3.jpg",
    imageMobile: "./assets/images/mobile-image-hero-3.jpg",
  },
];

export default function Header(): JSX.Element {
  const [slide, setSlide] = useState(0);
  return (
    <header>
      {header.map((item: Items, i: number) => (
        <Item item={item} key={i} num={i} slide={slide} setSlide={setSlide} />
      ))}
    </header>
  );
}
