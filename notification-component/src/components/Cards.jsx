import Card from "./Card";

export default function Cards({ read }) {
  return (
    <ul className="my-6 flex flex-col gap-2 w-full">
      <Card read={read}></Card>
    </ul>
  );
}
