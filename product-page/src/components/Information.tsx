import toast, { Toaster } from "react-hot-toast";
import AddToCart from "./AddToCart";
import Amount from "./Amount";
import { Product } from "./Interfaces";

interface ProductProps {
  product: Product;
  amount: number;
  setAmount: (amount: number) => void;
  setCart: (cart: Product[]) => void;
}

export default function Information({
  product,
  amount,
  setAmount,
  setCart,
}: ProductProps) {
  const { company, model, description, price, discountedPrice } = product;

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (amount === 0) {
      toast.error("Please specify the amount.");
      return;
    } else {
      const productsAndAmount = { ...product, itemAmount: amount };
      setCart([productsAndAmount]);
      toast.success("Product has been added to the cart!");
    }
  }

  return (
    <form className="flex flex-col gap-3 px-6 py-4" onSubmit={handleSubmit}>
      <span className="text-sm font-bold uppercase tracking-wider text-orange">
        {company}
      </span>

      <h1 className="w-[70%] text-2xl font-bold tracking-wide xl:text-4xl">
        {model}
      </h1>

      <p className=" text-sm leading-relaxed tracking-wider text-dGrayBlue xl:w-3/4 xl:text-lg xl:leading-relaxed ">
        {description}
      </p>

      <div className="my-4 flex items-center justify-between font-bold xl:flex-col xl:items-start xl:gap-2">
        <div className="flex items-center justify-center gap-4">
          <span className="text-3xl ">${discountedPrice}.00</span>
          <span className=" rounded bg-paleOrange px-2 text-orange">50%</span>
        </div>
        <span className=" text-dGrayBlue/40 line-through">${price}.00</span>
      </div>
      <section className=" my-4 flex flex-col gap-4 xl:w-full xl:flex-row xl:items-center ">
        <Amount amount={amount} setAmount={setAmount} />
        <AddToCart />
      </section>
      <Toaster position="bottom-right" />
    </form>
  );
}
