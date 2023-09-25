export default function Card({ type, price, storage, users, send }) {
  return (
    <article
      className={`${
        type === "Professional"
          ? "bg-gradient-to-r from-gradient1 to-gradient2 text-[#fff] xl:h-[580px]"
          : "bg-[#fff] text-grayishBlue"
      } z-30 flex flex-col items-center justify-center px-8 gap-6  shadow-lg rounded-xl w-full`}
    >
      <h2 className="mt-6">{type}</h2>
      <div
        className={`flex items-center justify-center gap-1  ${
          type === "Professional" ? "" : "text-dGrayishBlue"
        }`}
      >
        <span className="text-3xl">$</span>
        <span className="text-6xl">{price}</span>
      </div>
      <ul className="flex flex-col items-center justify-center w-full">
        <li className="w-full py-5 text-center border-t border-lGrayishBlue">
          {storage} Storage
        </li>
        <li className="w-full py-5 text-center border-t border-lGrayishBlue">
          {users} Users Allowed
        </li>
        <li className="w-full py-5 text-center border-t border-b border-lGrayishBlue">
          Send up to {send} GB
        </li>
      </ul>
      <button
        className={`${
          type === "Professional"
            ? ""
            : "bg-gradient-to-r from-gradient1 to-gradient2"
        } w-full h-[60px] my-8  rounded-lg overflow-hidden  `}
      >
        <div
          className={`${
            type === "Professional"
              ? "text-gradient1 bg-[#fff] hover:bg-transparent hover:text-[#fff] hover:border-[#fff] hover:border-[1px]"
              : "text-[#fff] hover:bg-[#fff] hover:border-gradient2 hover:border-[1px] hover:text-gradient2"
          } uppercase text-sm tracking-[3px] w-full h-[60px] flex items-center justify-center transition rounded-lg`}
        >
          Learn More
        </div>
      </button>
    </article>
  );
}
