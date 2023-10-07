export default function List({ info }) {
  return (
    <>
      <ul key={info.ip} className="flex flex-col items-center justify-center">
        <li className="text-xs font-medium tracking-wider text-darkGrey">
          IP ADDRESS
        </li>
        <li className="mt-2 text-lg font-semibold">{info.ip}</li>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <li className="text-xs font-medium tracking-wider text-darkGrey">
          LOCATION
        </li>
        <li className="mt-2 text-lg font-semibold">
          {info.location.region}, {info.location.country}
        </li>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <li className="text-xs font-medium tracking-wider text-darkGrey">
          TIMEZONE
        </li>
        <li className="mt-2 text-lg font-semibold">
          UTC {info.location.timezone}
        </li>
      </ul>

      <ul className="flex flex-col items-center justify-center">
        <li className="text-xs font-medium tracking-wider text-darkGrey">
          ISP
        </li>
        <li className="mt-2 text-lg font-semibold">{info.isp}</li>
      </ul>
    </>
  );
}
