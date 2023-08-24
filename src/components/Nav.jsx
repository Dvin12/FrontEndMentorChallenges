export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-6 font-Raleway xl:py-16 xl:px-20 ">
      <img
        src="./assets/images/logo.svg"
        alt="fylo logo"
        className="w-1/4 xl:w-fit"
      />
      <section className="flex items-center justify-center gap-6 text-xs xl:text-base xl:gap-14 xl:tracking-wide text-dBlue">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign in</a>
      </section>
    </nav>
  );
}
