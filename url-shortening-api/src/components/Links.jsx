import Link from "./Link";

export default function Links({ input, isLoading }) {
  return (
    <>
      {isLoading ? (
        <p className="text-center pt-28">Loading....</p>
      ) : (
        <section className="flex flex-col gap-5 px-6 pt-28">
          {input.map((link, i) => (
            <Link key={i} link={link} />
          ))}
        </section>
      )}
    </>
  );
}
