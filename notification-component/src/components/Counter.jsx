export default function Counter({ notifications }) {
  return (
    <section className="flex items-center gap-2">
      <h2 className="text-xl font-extrabold">Notifications</h2>
      <span className=" px-[10px] py-[2px] font-bold  rounded-md bg-[hsl(219,85%,26%)] text-white text-sm">
        {notifications}
      </span>
    </section>
  );
}
