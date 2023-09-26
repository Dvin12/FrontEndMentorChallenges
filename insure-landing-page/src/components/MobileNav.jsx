export default function MobileNav({ activated }) {
  return (
    <aside
      className={`fixed top-20 left-0 w-full h-full bg-vDarkViolet text-vLightGray flex  justify-center ${
        activated ? "translate-x-0" : "translate-x-full"
      } transition-all duration-300 z-40 lg:hidden`}
    >
      <img
        src="../assets/images/bg-pattern-mobile-nav.svg"
        alt="pattern"
        className="absolute bottom-20 w-full z-40"
      />
      <section className="flex flex-col items-center w-full py-12 gap-9 text-xl tracking-widest z-40">
        <a href="#">HOW WE WORK</a>
        <a href="#">BLOG</a>
        <a href="#">ACCOUNT</a>
        <a href="#" className="border-2 px-24 py-3">
          VIEW PLANS
        </a>
      </section>
    </aside>
  );
}
