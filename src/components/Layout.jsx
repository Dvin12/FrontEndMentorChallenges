export default function Layout({ children }) {
  return (
    <section className="md:grid xl:grid-cols-4 xl:grid-rows-4 w-full h-full gap-8 xl:px-16 px-6 py-20 xl:py-12 md:grid-flow-row md:auto-cols-auto flex flex-col justify-center items-center 2xl:h-screen">
      {children}
    </section>
  );
}
