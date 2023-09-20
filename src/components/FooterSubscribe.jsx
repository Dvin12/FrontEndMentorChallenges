import Button from "./Button";

export default function FooterSubscribe() {
  return (
    <section className="flex items-center justify-center w-full gap-2 px-6 my-10 text-sm">
      <input
        type="text"
        className="w-full px-6 py-3 rounded-full "
        placeholder="Updates in your inbox..."
      />
      <Button>GO</Button>
    </section>
  );
}
