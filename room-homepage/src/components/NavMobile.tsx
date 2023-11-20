export default function NavMobile(): JSX.Element {
  return (
    <section className="absolute flex items-center justify-between w-full px-6 py-12">
      <button className="w-full">
        <img src="./assets/images/icon-hamburger.svg" alt="hamburger" />
      </button>
      <div className="w-full">
        <img src="./assets/images/logo.svg" alt="" />
      </div>
      <div className="w-1/2"></div>
    </section>
  );
}
