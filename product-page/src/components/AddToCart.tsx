export default function AddToCart() {
  return (
    <button
      type="submit"
      className=" bg-orange text-white flex items-center justify-center py-4 rounded-lg gap-4 font-bold tracking-wider shadow-xl  shadow-orange/40 xl:w-1/2  "
    >
      <img
        src="./images/icon-cart.svg"
        alt=""
        className=" invert  0 brightness-0"
      />
      <span>Add to cart</span>
    </button>
  );
}
