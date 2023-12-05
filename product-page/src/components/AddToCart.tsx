export default function AddToCart() {
  return (
    <button
      type="submit"
      className=" flex items-center justify-center gap-4 rounded-lg bg-orange py-4 font-bold tracking-wider text-white shadow-xl  shadow-orange/40 duration-200  hover:opacity-60 xl:w-1/2 "
    >
      <img
        src="./images/icon-cart.svg"
        alt="cart button"
        className=" 0  brightness-0 invert"
      />
      <span>Add to cart</span>
    </button>
  );
}
