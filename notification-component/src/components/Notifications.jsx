export default function Notifications({ children }) {
  return (
    <section className="md:w-[700px] bg-white md:h-fit h-full  md:rounded-2xl shadow-xl shadow-[hsl(205,33%,90%)] md:p-8 p-4 ">
      {children}
    </section>
  );
}
