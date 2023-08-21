export default function Section({ children }) {
  return (
    <section className="flex flex-col items-center justify-center  w-full h-full relative gap-8">
      {children}
    </section>
  );
}
