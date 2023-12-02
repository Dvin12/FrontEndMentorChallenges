export default function NavMobile(): JSX.Element {
  return (
    <nav className="xl:hidden flex items-center justify-between w-full px-6 py-4">
      <div className="flex items-center justify-center gap-4">
        <button>
          <img src="./images/icon-menu.svg" alt="" />
        </button>
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <button>
          <img src="./images/icon-cart.svg" alt="" />
        </button>
        <button className="">
          <img src="./images/image-avatar.png" alt="" className="w-[30px]" />
        </button>
      </div>
    </nav>
  );
}
