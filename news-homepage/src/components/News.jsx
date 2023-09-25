export default function News({ children }) {
  return (
    <section className="md:grid xl:grid-cols-3 xl:grid-rows-4 h-full my-12 flex flex-col gap-8 grid-flow-dense">
      {children}
    </section>
  );
}
