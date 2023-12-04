import ImageDesktop from "./ImageDesktop";
import ImageMobile from "./ImageMobile";
import { Product } from "./Interfaces";

interface ProductProps {
  product: Pick<Product, "thumbnails" | "images">;
}

export default function Images({
  product: { images, thumbnails },
}: ProductProps) {
  return (
    <>
      <ImageDesktop images={images} thumbnails={thumbnails} />
      <ImageMobile images={images} />
    </>
  );
}
