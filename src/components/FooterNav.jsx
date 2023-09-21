export default function FooterNav() {
  return (
    <div className="w-full">
      <nav className="flex justify-between w-full px-12 text-veryLightGray ">
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="duration-200 hover:text-brightRed">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-brightRed">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-brightRed">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-brightRed">
              About us
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="duration-200 hover:text-brightRed">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-brightRed">
              Community
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-brightRed">
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
