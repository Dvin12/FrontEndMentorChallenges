interface SideMenu {
  isActive: boolean;
  handleClick: () => void;
}

export default function Sidemenu({ isActive, handleClick }: SideMenu) {
  return (
    <aside
      className={` bg-black/70 w-full fixed h-screen z-30 top-0 left-0 ${
        isActive === true ? " translate-x-0" : "-translate-x-full"
      } duration-300 `}
    >
      <section className="w-2/3 bg-white h-screen p-6 flex flex-col gap-12 text-lg font-bold tracking-wide ">
        <button onClick={handleClick}>
          <img src="./images/icon-close.svg" alt="" />
        </button>
        <ul className="flex flex-col gap-5">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </section>
    </aside>
  );
}
