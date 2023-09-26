export default function BulletPoint({ bulletPoint }) {
  return (
    <article className="flex flex-col items-center justify-center my-12 text-center xl:w-full">
      <img src={bulletPoint.image} alt="" />
      <h4 className="py-8 text-2xl font-bold text-dBlue">{bulletPoint.name}</h4>
      <p className="xl:w-[26rem] xl:text-lg">{bulletPoint.text}</p>
    </article>
  );
}
