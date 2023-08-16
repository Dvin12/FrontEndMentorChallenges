export default function Card({ type, price, storage, users, send }) {
  return (
    <article
      className={`${
        type === "Professional"
          ? "bg-gradient-to-r from-gradient1 to-gradient2 text-[#fff]"
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
      <ul className="flex flex-col w-full items-center justify-center">
        <li className="border-t  w-full text-center py-5 border-lGrayishBlue">
          {storage} Storage
        </li>
        <li className=" w-full text-center border-t py-5 border-lGrayishBlue ">
          {users} Users Allowed
        </li>
        <li className="border-t w-full text-center border-b py-5 border-lGrayishBlue">
          Send up to {send} GB
        </li>
      </ul>
      <button
        className={`mb-8 ${
          type === "Professional"
            ? "bg-[#fff] text-gradient2"
            : "bg-gradient-to-r from-gradient1 to-gradient2"
        } w-full py-4 rounded-lg text-vLGrayishBlue tracking-[2px] text-xs `}
      >
        LEARN MORE
      </button>
    </article>
  );
}
