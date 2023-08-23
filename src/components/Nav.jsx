export default function Nav() {
  return (
    <nav className="flex items-center justify-between font-Raleway ">
      <img src="./assets/images/logo.svg" alt="fylo logo" className="w-1/4" />
      <section className="flex items-center justify-center gap-6 text-xs text-dBlue">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign in</a>
      </section>
    </nav>
  );
}
