export default function Snippet({ snippet }) {
  return (
    <section className="flex flex-col items-center justify-center my-6 text-center xl:text-left xl:my-4 ">
      <h2 className="text-2xl font-bold xl:text-3xl text-dBlue xl:w-full">
        {snippet.name}
      </h2>
      <p className="py-4 xl:w-[25rem] xl:text-lg ">{snippet.text}</p>
    </section>
  );
}
