export default function Mark({ handleReadAll }) {
  return (
    <section>
      <span
        className="text-sm text-[hsl(219,12%,42%)] hover:text-[hsl(219,85%,26%)] duration-300 cursor-pointer"
        onClick={() => handleReadAll()}
      >
        Mark all as read
      </span>
    </section>
  );
}
