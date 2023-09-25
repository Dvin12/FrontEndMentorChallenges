export default function Tracker({ children }) {
  return (
    <section className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-7 md:w-[1200px] h-full flex flex-col gap-8 px-14 py-10 ">
      {children}
    </section>
  );
}
