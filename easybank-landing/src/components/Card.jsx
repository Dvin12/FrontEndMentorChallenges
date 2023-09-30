export default function Card({ card }) {
  const { image, author, title, text } = card;
  return (
    <article className="bg-white overflow-hidden rounded-xl">
      <img src={image} alt="" />
      <section className="p-6 flex flex-col items-start justify-center gap-3">
        <span>By {author}</span>
        <h5>{title}</h5>
        <p>{text}</p>
      </section>
    </article>
  );
}
