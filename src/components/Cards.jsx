export default function Cards({ children }) {
  return (
    <section className="absolute grid place-content-center w-full h-full md:bottom-20">
      <div className="flex md:flex-row flex-col gap-12 md:items-end items-center w-full ">
        {children}
      </div>
    </section>
  );
}
