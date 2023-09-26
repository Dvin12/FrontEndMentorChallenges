export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-6 xl:p-16 font-raleway bg-introEmail">
      <img
        src="./assets/images/logo.svg"
        alt="logo"
        className="w-1/4 xl:w-[13rem]"
      />
      <section className="flex gap-6 text-xs tracking-wide xl:text-lg xl:gap-14 text-cyan">
        <a href="#" className="group hover:text-[#fff] transition duration-300">
          Features
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-[#fff]"></span>
        </a>
        <a href="#" className="group hover:text-[#fff] transition duration-300">
          Team
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-[#fff]"></span>
        </a>
        <a href="#" className="group hover:text-[#fff] transition duration-300">
          Sign in
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-[#fff]"></span>
        </a>
      </section>
    </nav>
  );
}
