export default function CardUI() {
  return (
    <article className="bg-[hsl(228,56%,26%)] w-full md:w-[380px] h-[220px] rounded-xl rounded-tr-[120px] drop-shadow-2xl px-10 py-12">
      <div className="flex flex-col justify-between items-start  w-full h-full  gap-10">
        <img src="./assets/images/logo.svg" alt="" />
        <ul className="flex flex-row   w-full h-auto gap-4">
          <li className="bg-[hsl(229,57%,11%)] hover:bg-[hsl(229,40%,31%)] duration-300 p-3 rounded-lg flex items-center cursor-pointer">
            <img src="./assets/images/icon-document.svg" alt="" />
          </li>
          <li className="bg-[hsl(229,57%,11%)] p-3 rounded-lg flex items-center cursor-pointer hover:bg-[hsl(229,40%,31%)] duration-300">
            <img src="./assets/images/icon-folder.svg" alt="" />
          </li>
          <li className="bg-[hsl(229,57%,11%)] p-3 rounded-lg flex items-center cursor-pointer hover:bg-[hsl(229,40%,31%)] duration-300">
            <img src="./assets/images/icon-upload.svg" alt="" />
          </li>
        </ul>
      </div>
    </article>
  );
}
