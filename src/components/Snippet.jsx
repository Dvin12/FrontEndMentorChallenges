export default function Snippet({ snippet }) {
  return (
    <section className="flex flex-col items-center justify-center my-6 text-center">
      <h2 className="text-2xl font-bold text-dBlue">{snippet.name}</h2>
      <p className="py-2">{snippet.text}</p>
    </section>
  );
}
