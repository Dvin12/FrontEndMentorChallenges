export default function FooterNav() {
  return (
    <nav className="flex justify-between w-full px-12 text-veryLightGray">
      <ul className="flex flex-col gap-2">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
      <ul className="flex flex-col gap-2">
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </nav>
  );
}
