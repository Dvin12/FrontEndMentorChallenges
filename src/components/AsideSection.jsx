export default function AsideSection({ title, paragraph, border }) {
  return (
    <section className={`border-[hsl(233,8%,70%)] pb-6 ${border} `}>
      <h3 className="text-[hsl(36,100%,99%)] text-2xl font-semibold hover:text-[hsl(35,77%,62%)] duration-300 transition-all cursor-pointer pt-8 md:pt-0">
        {title}
      </h3>
      <p className="text-[hsl(233,8%,70%)] text-lg  w-full py-4">{paragraph}</p>
    </section>
  );
}
