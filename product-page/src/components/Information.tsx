import AddToCart from "./AddToCart";
import Amount from "./Amount";
import { Product } from "./Interfaces";

interface ProductProps {
  product: Pick<
    Product,
    "company" | "model" | "description" | "price" | "discountedPrice"
  >;
  amount: number;
  setAmount: (amount: number) => void;
}

export default function Information({
  product: { company, model, description, price, discountedPrice },
  amount,
  setAmount,
}: ProductProps) {
  return (
    <form className="px-6 py-4 flex flex-col gap-3">
      <span className="text-sm tracking-wider font-bold text-orange uppercase">
        {company}
      </span>

      <h1 className="text-2xl font-bold tracking-wide w-[70%]">{model}</h1>

      <p className=" tracking-wider leading-relaxed text-sm text-dGrayBlue ">
        {description}
      </p>

      <div className="flex items-center justify-between my-4 font-bold">
        <div className="flex gap-4 items-center justify-center">
          <span className="text-3xl ">${discountedPrice}.00</span>
          <span className=" bg-paleOrange px-2 text-orange rounded-sm">
            50%
          </span>
        </div>
        <span className=" text-dGrayBlue/40 line-through">${price}.00</span>
      </div>
      <section className=" flex flex-col gap-4 my-4 ">
        <Amount amount={amount} setAmount={setAmount} />
        <AddToCart />
      </section>
    </form>
  );
}
