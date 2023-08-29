export default function Section({ children }) {
  return (
    <section className="relative z-30 flex flex-col h-full gap-4 mx-6 my-4">
      {children}
    </section>
  );
}
