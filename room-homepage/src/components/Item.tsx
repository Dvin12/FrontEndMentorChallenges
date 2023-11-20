import { Items } from "./Header";

interface ItemProps {
  item: Items;
  num: number;
  slide: number;
}

export default function Item({ item, num, slide }: ItemProps): JSX.Element {
  return slide === num ? (
    <section>
      <img src={item.imageMobile} alt="" />
    </section>
  ) : (
    <></>
  );
}
