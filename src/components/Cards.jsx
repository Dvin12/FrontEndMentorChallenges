import Card from "./Card";

export default function Cards({ annually }) {
  return (
    <section className="z-30 flex flex-col items-center justify-center w-full gap-8 xl:flex-row xl:gap-0 xl:px-64 xl:justify-center xl:py-2">
      <Card
        type="Basic"
        price={annually ? "199.99" : "19.99"}
        storage="500 GB"
        users="2"
        send="3"
      />
      <Card
        type="Professional"
        price={annually ? "249.99" : "24.99"}
        storage="1 TB"
        users="5"
        send="10"
      />
      <Card
        type="Master"
        price={annually ? "399.99" : "39.99"}
        storage="2 TB"
        users="10"
        send="20"
      />
    </section>
  );
}
