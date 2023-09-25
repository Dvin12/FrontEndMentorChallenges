export default function MobileNav({ active }) {
  return (
    <section
      className={`fixed inset-x-1/2 transform ${
        active ? "-translate-x-1/2" : "translate-x-96"
      } bg-[#fff] w-[19.5rem] top-20 shadow-md z-30 rounded-md py-6 px-6 duration-300 transition-all md:hidden`}
    >
      <aside className="flex flex-col items-center justify-center gap-4 text-lg font-extrabold tracking-wider">
        <a href="#">PRODUCT</a>
        <a href="#">FEATURES</a>
        <a
          href="#"
          className="w-full pb-5 text-center border-b border-grayBlue"
        >
          PRICING
        </a>
        <a href="#" className="my-2 text-grayBlue">
          LOGIN
        </a>
      </aside>
    </section>
  );
}
