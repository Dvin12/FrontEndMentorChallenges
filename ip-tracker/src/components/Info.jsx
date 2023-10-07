import List from "./List";

export default function Info({ ip }) {
  return (
    <section className="absolute top-44 left-1/2 -translate-x-1/2 w-[90%] bg-[#fff] flex flex-col items-center justify-center py-6 z-[500] rounded-xl gap-4 shadow-xl">
      {ip.length === 0 ? (
        <p className="px-10 text-center">
          Please submit an valid IP address in order to see the data
        </p>
      ) : (
        ip.map((info, i) => <List info={info} key={i} />)
      )}
    </section>
  );
}
