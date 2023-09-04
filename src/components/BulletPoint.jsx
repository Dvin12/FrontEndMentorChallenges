export default function BulletPoint({ bulletPoint }) {
  return (
    <article className="flex flex-col items-center justify-center my-12 text-center">
      <img src={bulletPoint.image} alt="" />
      <h4 className="py-8 text-2xl font-bold text-dBlue">{bulletPoint.name}</h4>
      <p>{bulletPoint.text}</p>
    </article>
  );
}
