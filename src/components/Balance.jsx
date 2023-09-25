export default function Balance() {
  return (
    <section className="bg-[hsl(10,79%,65%)] md:w-[500px] h-[110px] md:rounded-2xl rounded-xl text-[hsl(33,100%,98%)] ">
      <article className="p-6 flex justify-between items-center">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-sm">My balance</h3>
          <h4 className="text-2xl font-bold">$921.48</h4>
        </div>
        <img src="./assets/images/logo.svg" alt="" />
      </article>
    </section>
  );
}
