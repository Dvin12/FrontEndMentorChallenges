import List from "./List";

export default function Info({ ip }) {
  return (
    <>
      {ip.length === 0 ? (
        <p className="absolute top-44 left-1/2 -translate-x-1/2 w-[90%] xl:w-[40%]  2xl:top-72    xl:px-12 bg-[#fff]   py-6 z-[500] rounded-xl gap-4 shadow-xl xl:py-12 text-center px-8">
          Please submit a valid IP address in order to see the data.
        </p>
      ) : (
        <section className="absolute top-44 left-1/2 -translate-x-1/2 w-[90%] xl:w-[70%] 2xl:top-64  xl:flex-row  xl:items-start xl:justify-between xl:px-12 bg-[#fff] flex flex-col items-center justify-center py-6 z-[500] rounded-xl gap-4 shadow-xl xl:py-12">
          {ip.map((info, i) => (
            <List info={info} key={i} />
          ))}
        </section>
      )}
    </>
  );
}
