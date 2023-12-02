export default function Information() {
  return (
    <form className="px-6 py-2 flex flex-col gap-4">
      <span className="text-sm tracking-wide font-bold text-orange">
        SNEAKER COMPANY
      </span>

      <h1 className="text-2xl font-bold tracking-wide w-[70%]">
        Fall Limited Edition Sneakers
      </h1>

      <p className=" tracking-wider leading-relaxed text-sm text-dGrayBlue ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="flex items-center justify-between my-4 font-bold">
        <div className="flex gap-4 items-center justify-center">
          <span className="text-3xl ">$125.00</span>
          <span className=" bg-paleOrange px-2 text-orange rounded-sm">
            50%
          </span>
        </div>
        <span className=" text-dGrayBlue/40 line-through">$250.00</span>
      </div>
      <section className=" flex flex-col gap-4 my-4 ">
        <div className=" bg-lGrayBlue flex items-center justify-between px-6 py-4 font-bold rounded-lg">
          <button>
            <img src="./images/icon-minus.svg" alt="" />
          </button>
          <span>0</span>
          <button>
            <img src="./images/icon-plus.svg" alt="" />
          </button>
        </div>

        <button className=" bg-orange text-white flex items-center justify-center py-4 rounded-lg gap-4 font-bold tracking-wider ">
          <img
            src="./images/icon-cart.svg"
            alt=""
            className=" invert  0 brightness-0"
          />
          <span>Add to cart</span>
        </button>
      </section>
    </form>
  );
}
