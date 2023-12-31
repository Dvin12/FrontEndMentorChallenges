export default function BulletPoint({ bulletPoint }) {
  const { image, name, text } = bulletPoint;
  return (
    <article className="flex flex-col items-center justify-center gap-6 text-center xl:items-start xl:text-start 2xl:pr-6">
      <img src={image} alt={name} />
      <h3 className="text-2xl text-dBlue">{name}</h3>
      <p className="leading-relaxed ">{text}</p>
    </article>
  );
}
