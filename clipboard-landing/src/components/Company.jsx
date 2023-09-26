export default function Company({ company }) {
  return (
    <section className="flex items-center justify-center my-14">
      <img src={company.image} alt="" />
    </section>
  );
}
