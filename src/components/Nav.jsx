export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-6 font-raleway bg-introEmail">
      <img src="./assets/images/logo.svg" alt="logo" className="w-1/4" />
      <section className="flex gap-6 text-xs tracking-wide text-cyan">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign in</a>
      </section>
    </nav>
  );
}
