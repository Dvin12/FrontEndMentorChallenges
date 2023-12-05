interface SideMenu {
  isActive: boolean;
  handleClick: () => void;
}

export default function Sidemenu({ isActive, handleClick }: SideMenu) {
  return (
    <aside
      className={` fixed left-0 top-0 z-30 h-screen w-full bg-black/70 ${
        isActive === true ? " translate-x-0" : "-translate-x-full"
      } duration-300 `}
    >
      <section className="flex h-screen w-2/3 flex-col gap-12 bg-white p-6 text-lg font-bold tracking-wide ">
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
