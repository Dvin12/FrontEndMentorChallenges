export default function BillComponent({ children }) {
  return (
    <section className="bg-[white] md:w-[980px] md:h-[500px] h-fit w-fit md:rounded-3xl drop-shadow-2xl flex items-center md:flex-row flex-col gap-12 md:p-8 p-6 rounded-t-3xl">
      {children}
    </section>
  );
}
