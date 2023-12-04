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
    <form className="px-6 py-4 flex flex-col gap-3" onSubmit={handleSubmit}>
      <span className="text-sm tracking-wider font-bold text-orange uppercase">
        {company}
      </span>

      <h1 className="text-2xl xl:text-4xl font-bold tracking-wide w-[70%]">
        {model}
      </h1>

      <p className=" tracking-wider leading-relaxed text-sm text-dGrayBlue xl:text-lg xl:w-3/4 xl:leading-relaxed ">
        {description}
      </p>

      <div className="flex items-center justify-between my-4 font-bold xl:flex-col xl:items-start xl:gap-2">
        <div className="flex gap-4 items-center justify-center">
          <span className="text-3xl ">${discountedPrice}.00</span>
          <span className=" bg-paleOrange px-2 text-orange rounded">50%</span>
        </div>
        <span className=" text-dGrayBlue/40 line-through">${price}.00</span>
      </div>
      <section className=" flex flex-col gap-4 my-4 xl:flex-row xl:w-full xl:items-center ">
        <Amount amount={amount} setAmount={setAmount} />
        <AddToCart />
      </section>
      <Toaster position="bottom-right" />
    </form>
  );
}
