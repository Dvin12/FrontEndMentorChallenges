export default function Info() {
  return (
    <section className="absolute top-44 left-1/2 -translate-x-1/2 w-[90%] bg-[#fff] flex flex-col items-center justify-center py-6 z-[500] rounded-xl gap-4 shadow-xl">
      <ul className="flex flex-col items-center justify-center">
        <li className="text-xs font-medium tracking-wider text-darkGrey">
          IP ADDRESS
        </li>
        <li className="mt-2 text-lg font-semibold">1.0.0.0.1</li>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <li className="text-xs font-medium tracking-wider text-darkGrey">
          LOCATION
        </li>
        <li className="mt-2 text-lg font-semibold">LONDON, UK</li>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <li className="text-xs font-medium tracking-wider text-darkGrey">
          TIMEZONE
        </li>
        <li className="mt-2 text-lg font-semibold">UTC -05:00</li>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <li className="text-xs font-medium tracking-wider text-darkGrey">
          ISP
        </li>
        <li className="mt-2 text-lg font-semibold">SpaceX Starlink</li>
      </ul>
    </section>
  );
}
