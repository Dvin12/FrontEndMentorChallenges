export default function Section({ children }) {
  return (
    <section className="relative w-full mt-32 xl:mt-64 bg-gBlue">
      <img
        src="./assets/images/bg-curve-mobile.svg"
        alt="background pattern"
        className="absolute left-0 z-30 w-full -top-12 xl:hidden"
      />

      <img
        src="./assets/images/bg-curve-desktop.svg"
        alt="background pattern"
        className="absolute left-0 z-30 hidden w-full -top-28 xl:block"
      />
      {children}
    </section>
  );
}
