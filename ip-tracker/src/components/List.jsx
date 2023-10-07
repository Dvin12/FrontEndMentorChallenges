export default function List({ info }) {
  return (
    <>
      <ul className="flex flex-col items-center justify-center xl:items-start">
        <li className="text-xs font-medium tracking-wider text-darkGrey xl:text-base">
          IP ADDRESS
        </li>
        <li className="mt-2 text-lg font-semibold xl:text-2xl">{info.ip}</li>
      </ul>

      <ul className="flex flex-col items-center justify-center xl:border-l-[1px] xl:px-4 xl:items-start">
        <li className="text-xs font-medium tracking-wider text-darkGrey xl:text-base">
          LOCATION
        </li>
        <li className="mt-2 text-lg font-semibold xl:text-2xl">
          {info.region}, {info.country}
        </li>
      </ul>

      <ul className="flex flex-col items-center justify-center xl:border-l-[1px] xl:px-4 xl:items-start">
        <li className="text-xs font-medium tracking-wider text-darkGrey xl:text-base ">
          TIMEZONE
        </li>
        <li className="mt-2 text-lg font-semibold xl:text-2xl">
          UTC {info.timezone}
        </li>
      </ul>

      <ul className="flex flex-col items-center justify-center xl:border-l-[1px] xl:px-4 xl:items-start">
        <li className="text-xs font-medium tracking-wider text-darkGrey xl:text-base">
          ISP
        </li>
        <li className="mt-2 text-lg font-semibold xl:text-2xl">{info.isp}</li>
      </ul>
    </>
  );
}
